import React, { useEffect, useState, useCallback } from "react";
import CharacterCard from "../components/CharacterCard";
import { fetchCharacters } from "../services/api";
import { Character } from "../interfaces/Character";
import { Container } from "../styledComponents/ContainerDivs";
import useDebounce from "../custom_hooks/useDebounce";
import { SearchForm, Input, Select, Button } from "../styledComponents/SearchFilterEquipment";

/**
 * CharactersPage component fetches and displays a list of characters.
 * It includes a search form for filtering characters by name and status.
 *
 * @returns {JSX.Element} The rendered CharactersPage component.
 */
const CharactersPage: React.FC = () => {
  // State to hold the list of characters
  const [characters, setCharacters] = useState<Character[]>([]);
  // State for pagination
  const [page, setPage] = useState(1);
  // State for character name filter
  const [name, setName] = useState("");
  // State for character status filter
  const [status, setStatus] = useState("");
  // State to indicate loading status
  const [loading, setLoading] = useState(false);

  // Debounced value for the character name to limit API calls - Just used it, it is just added to show it can be done.
  const debouncedName = useDebounce(1000, name);

  // Function to fetch and set characters
  const fetchAndSetCharacters = useCallback(() => {
    setLoading(true);
    fetchCharacters(page, debouncedName, { status })
      .then((response) => {
        setCharacters((prev) => [...prev, ...response.data.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page, debouncedName, status]);

  // Effect to fetch characters when the component mounts or dependencies change
  useEffect(() => {
    fetchAndSetCharacters();
  }, [fetchAndSetCharacters]);

  // Effect to handle infinite scroll for loading more characters
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
    setCharacters([]);
    setPage(1);
    fetchAndSetCharacters();
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchForm onSubmit={handleSearch}>
          {/* Input for character name */}
          <Input
            type="text"
            placeholder="Character Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Select for character status */}
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Select>
          <Button type="submit">Search</Button>
        </SearchForm>
      </div>
      <Container>
        {/* Render each character in the list */}
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
        {/* Show loading indicator if data is being fetched */}
        {loading && <p>Loading...</p>}
      </Container>
    </>
  );
};

export default CharactersPage;
