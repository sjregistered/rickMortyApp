import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../services/api";
import { Character } from "../interfaces/Character";
import { CharacterImage, CharacterInfo } from "../styledComponents/Characters";
import { LocationInfo } from "../styledComponents/Location";
import { ContaineSingleCard } from "../styledComponents/ContainerDivs";
import { InfoRow } from "../styledComponents/Misceleneous";

/**
 * CharacterDetailPage component fetches and displays detailed information about a character.
 *
 * @returns {JSX.Element} The rendered CharacterDetailPage component.
 */
const CharacterDetailPage: React.FC = () => {
  // Extract the character ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  // State to hold the character data
  const [character, setCharacter] = useState<Character | null>(null);

  // Fetch the character data when the component mounts or the ID changes
  useEffect(() => {
    fetchCharacterById(Number(id))
      .then((response) => setCharacter(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  // Show a loading message while the character data is being fetched
  if (!character) return <div>Loading...</div>;

  // Render the character details
  return (
    <ContaineSingleCard>
      <CharacterImage src={character.image} alt={character.name} />
      <CharacterInfo>
        <h1>{character.name}</h1>
        <InfoRow>Species: {character.species}</InfoRow>
        <InfoRow>Status: {character.status}</InfoRow>
        <InfoRow>Gender: {character.gender}</InfoRow>
        <InfoRow>Type: {character.type}</InfoRow>
      </CharacterInfo>
      <LocationInfo>
        <h2>Origin</h2>
        <InfoRow>Name: {character.origin.name}</InfoRow>
      </LocationInfo>
      <LocationInfo>
        <h2>Current Location</h2>
        <InfoRow>Name: {character.location.name}</InfoRow>
      </LocationInfo>
    </ContaineSingleCard>
  );
};

export default CharacterDetailPage;
