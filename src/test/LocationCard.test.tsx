import React from 'react';
import { render } from '@testing-library/react';
import LocationCard from '../components/LocationCard';
import { Location } from '../interfaces/Location';

// Mock location data to be used in the tests
const location: Location = {
  id: 1,
  name: 'Earth (C-137)',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: [],
  url: '',
  created: ''
};

/**
 * Unit test for the LocationCard component.
 * It renders the component with mock data and verifies that the expected elements are present.
 */
test('renders LocationCard component', () => {
  // Render the LocationCard component
  const { getByText } = render(<LocationCard location={location} />);

  // Assert that the location's name is rendered
  expect(getByText('Earth (C-137)')).toBeInTheDocument();
  // Assert that the location's type is rendered
  expect(getByText('Type: Planet')).toBeInTheDocument();
  // Assert that the location's dimension is rendered
  expect(getByText('Dimension: Dimension C-137')).toBeInTheDocument();
});
