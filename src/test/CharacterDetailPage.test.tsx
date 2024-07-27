import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CharacterDetailPage from '../pages/CharacterDetailPage';
import { fetchCharacterById } from '../services/api';
import { Character } from '../interfaces/Character';

// Mock the fetchCharacterById function
jest.mock('../services/api');

// Mock character data to be used in the tests
const character: Character = {
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
  created: ''
};

// Mock the resolved value of fetchCharacterById to return the mock character data
(fetchCharacterById as jest.Mock).mockResolvedValue({ data: character });

/**
 * Unit test for the CharacterDetailPage component.
 * It renders the component with mock data and verifies that the expected elements are present.
 */
test('renders CharacterDetailPage component', async () => {
  // Render the CharacterDetailPage component within a MemoryRouter to handle routing
  const { getByText, getByAltText } = render(
    <MemoryRouter initialEntries={['/character/1']}>
      <Routes>
        <Route path="/character/:id" element={<CharacterDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the character's name to be rendered and assert its presence
  await waitFor(() => expect(getByText('Rick Sanchez')).toBeInTheDocument());
  // Assert that the character's image is rendered with the correct alt text
  expect(getByAltText('Rick Sanchez')).toBeInTheDocument();
  // Assert that the character's species is rendered
  expect(getByText('Species: Human')).toBeInTheDocument();
  // Assert that the character's status is rendered
  expect(getByText('Status: Alive')).toBeInTheDocument();
});
