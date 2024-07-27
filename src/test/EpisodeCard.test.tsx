// src/components/__tests__/EpisodeCard.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EpisodeCard from '../components/EpisodeCard';
import { Episode } from '../interfaces/Episode';

// Mock episode data to be used in the tests
const episode: Episode = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  characters: [],
  url: '',
  created: ''
};

/**
 * Unit test for the EpisodeCard component.
 * It renders the component with mock data and verifies that the expected elements are present.
 */
test('renders EpisodeCard component', () => {
  // Render the EpisodeCard component within a Router context
  const { getByText } = render(
    <Router>
      <EpisodeCard episode={episode} />
    </Router>
  );

  // Assert that the episode's name is rendered
  expect(getByText('Pilot')).toBeInTheDocument();
  // Assert that the episode's air date is rendered
  expect(getByText('December 2, 2013')).toBeInTheDocument();
  // Assert that the episode's code (season and episode number) is rendered
  expect(getByText('S01E01')).toBeInTheDocument();
});
