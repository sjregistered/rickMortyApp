import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CharactersPage from '../pages/CharactersPage';
import { fetchCharacters } from '../services/api';
import { BrowserRouter as Router } from 'react-router-dom';
import { Character } from '../interfaces/Character';

// Mock the fetchCharacters function
jest.mock('../services/api');

// Mock character data to be used in the tests
const mockCharacters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: '' },
    location: { name: 'Earth (Replacement Dimension)', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
    url: '',
    created: '',
  },
];

/**
 * Unit test for the CharactersPage component.
 * It renders the component, mocks the API call, and verifies that the expected elements are present.
 */
test('renders CharactersPage component and fetches characters', async () => {
  // Mock the resolved value of fetchCharacters to return the mock character data
  (fetchCharacters as jest.Mock).mockResolvedValueOnce({ data: { results: mockCharacters } });

  // Render the CharactersPage component within a Router context
  const { getByText, getByPlaceholderText } = render(
    <Router>
      <CharactersPage />
    </Router>
  );

  // Assert that the search input is rendered
  expect(getByPlaceholderText('Character Name')).toBeInTheDocument();

  // Wait for the character's name to be rendered and assert its presence
  await waitFor(() => {
    expect(getByText('Rick Sanchez')).toBeInTheDocument();
  });
});
