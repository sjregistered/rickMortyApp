import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLocationById } from '../services/api';
import { Location } from '../interfaces/Location';

/**
 * LocationDetailPage component fetches and displays detailed information about a location.
 *
 * @returns {JSX.Element} The rendered LocationDetailPage component.
 */
const LocationDetailPage: React.FC = () => {
  // Extract the location ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  // State to hold the location data
  const [location, setLocation] = useState<Location | null>(null);

  // Fetch location data when the component mounts or the ID changes
  useEffect(() => {
    fetchLocationById(Number(id))
      .then(response => setLocation(response.data))
      .catch(error => console.error(error));
  }, [id]);

  // Show a loading message while the location data is being fetched
  if (!location) return <div>Loading...</div>;

  // Render the location details
  return (
    <div>
      {/* Location Name */}
      <h1>{location.name}</h1>
      {/* Location Type */}
      <p>Type: {location.type}</p>
      {/* Location Dimension */}
      <p>Dimension: {location.dimension}</p>
      {/* Residents List */}
      <h2>Residents</h2>
      <ul>
        {location.residents.map(residentUrl => (
          <li key={residentUrl}>{residentUrl}</li> // You can fetch and display resident details here if needed
        ))}
      </ul>
    </div>
  );
};

export default LocationDetailPage;
