import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../styledComponents/Card';
import { CharacterCardProps } from '../interfaces/CharacterCardProps';
import { CharacterDetails, CharacterImage, CharacterName } from '../styledComponents/Characters';

/**
 * CharacterCard component displays individual character information
 * in a card format with a link to the character's detailed page.
 *
 * @param {CharacterCardProps} character - The character information to display.
 * @returns {JSX.Element} The rendered CharacterCard component.
 */
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  // Link component from react-router-dom for navigation to character detail page
  <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <CharacterImage src={character.image} alt={character.name} />
      <CharacterName>{character.name}</CharacterName>
      <CharacterDetails>{character.species} - {character.status}</CharacterDetails>
    </Card>
  </Link>
);

export default CharacterCard;
