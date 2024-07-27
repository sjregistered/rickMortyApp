import React, { useEffect, useState, useCallback } from "react";
import { fetchLocations } from "../services/api";
import { Location } from "../interfaces/Location";
import LocationCard from "../components/LocationCard";
import { SearchForm, Input, Select, Button } from "../styledComponents/SearchFilterEquipment";
import { PageWrapper, LocationsContainer } from "../styledComponents/Misceleneous";

/**
 * LocationsPage component fetches and displays a list of locations.
 * It includes a search form for filtering locations by name and type.
 *
 * @returns {JSX.Element} The rendered LocationsPage component.
 */
const LocationsPage: React.FC = () => {
  // State to hold the list of locations
  const [locations, setLocations] = useState<Location[]>([]);
  // State to hold the list of unique location types
  const [types, setTypes] = useState<string[]>([]);
  // State for pagination
  const [page, setPage] = useState(1);
  // State for location name filter
  const [name, setName] = useState("");
  // State for location type filter
  const [type, setType] = useState("");
  // State to indicate loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch and set locations
  const fetchAndSetLocations = useCallback(() => {
    setLoading(true);
    fetchLocations(page, name, { type })
      .then((response) => {
        if (page === 1) {
          setLocations(response.data.results);
        } else {
          setLocations((prev) => [...prev, ...response.data.results]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page, name, type]);

  // Function to fetch and set unique location types
  const fetchAndSetTypes = useCallback(() => {
    fetchLocations(1, "", {})
      .then((response) => {
        const uniqueTypes = Array.from(
          new Set((response.data.results as Location[]).map((location) => location.type))
        );
        setTypes(uniqueTypes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Effect to fetch locations when the component mounts or dependencies change
  useEffect(() => {
    fetchAndSetLocations();
  }, [fetchAndSetLocations]);

  // Effect to fetch unique location types when the component mounts
  useEffect(() => {
    fetchAndSetTypes();
  }, [fetchAndSetTypes]);

  // Effect to handle infinite scroll for loading more locations
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // Function to handle the search form submission
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setPage(1);
    fetchAndSetLocations();
  };

  // Function to handle the type filter change
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    setPage(1);
    setLocations([]);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchForm onSubmit={handleSearch}>
          {/* Input for location name */}
          <Input
            type="text"
            placeholder="Location Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Select for location type */}
          <Select value={type} onChange={handleTypeChange}>
            <option value="">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Button type="submit">Search</Button>
        </SearchForm>
      </div>
      <PageWrapper>
        <LocationsContainer>
          {/* Render each location in the list */}
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </LocationsContainer>
        {/* Show loading indicator if data is being fetched */}
        {loading && <p>Loading...</p>}
      </PageWrapper>
    </>
  );
};

export default LocationsPage;
