import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { fetchLocationById } from '../services/api';
import LocationDetailPage from '../pages/LocationDetailPage';
import { Location } from '../interfaces/Location';

// Mock the fetchLocationById function
jest.mock('../services/api');

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

// Mock the resolved value of fetchLocationById to return the mock location data
(fetchLocationById as jest.Mock).mockResolvedValue({ data: location });

/**
 * Unit test for the LocationDetailPage component.
 * It renders the component with mock data and verifies that the expected elements are present.
 */
test('renders LocationDetailPage component', async () => {
  // Render the LocationDetailPage component within a MemoryRouter to handle routing
  const { getByText } = render(
    <MemoryRouter initialEntries={['/location/1']}>
      <Routes>
        <Route path="/location/:id" element={<LocationDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the location's name to be rendered and assert its presence
  await waitFor(() => expect(getByText('Earth (C-137)')).toBeInTheDocument());
  // Assert that the location's type is rendered
  expect(getByText('Type: Planet')).toBeInTheDocument();
  // Assert that the location's dimension is rendered
  expect(getByText('Dimension: Dimension C-137')).toBeInTheDocument();
});
