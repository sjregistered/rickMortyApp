import React from 'react';
import { Location } from '../interfaces/Location';
import Card from '../styledComponents/Card';
import { LocationName, LocationDetails } from '../styledComponents/Location';

// Define the props for the LocationCard component
interface LocationCardProps {
  location: Location;
}

/**
 * LocationCard component displays individual location information
 * in a card format.
 *
 * @param {LocationCardProps} location - The location information to display.
 * @returns {JSX.Element} The rendered LocationCard component.
 */
const LocationCard: React.FC<LocationCardProps> = ({ location }) => (
  <Card>
    <LocationName>{location.name}</LocationName>
    <LocationDetails>Type: {location.type}</LocationDetails>
    <LocationDetails>Dimension: {location.dimension}</LocationDetails>
  </Card>
);

export default LocationCard;
