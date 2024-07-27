import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCharacterById,
  fetchEpisodeById,
  fetchLocationById,
} from "../services/api";
import { Character } from "../interfaces/Character";
import { Episode } from "../interfaces/Episode";
import { Location } from "../interfaces/Location";
import { EpisodeCard, EpisodesList, EpisodeImage, EpisodeName } from "../styledComponents/Episode";
import { CharacterImage, CharacterInfo } from "../styledComponents/Characters";
import { LocationInfo } from "../styledComponents/Location";
import { ContaineSingleCard } from "../styledComponents/ContainerDivs";
import { InfoRow } from "../styledComponents/Misceleneous";

/**
 * CharacterDetailPage component fetches and displays detailed information about a character,
 * including their origin, current location, and episodes they appear in.
 *
 * @returns {JSX.Element} The rendered CharacterDetailPage component.
 */
const CharacterDetailPage: React.FC = () => {
  // Extract the character ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  // State to hold the character data
  const [character, setCharacter] = useState<Character | null>(null);
  // State to hold the origin location data
  const [origin, setOrigin] = useState<Location | null>(null);
  // State to hold the current location data
  const [location, setLocation] = useState<Location | null>(null);
  // State to hold the list of episodes
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  // Fetch character, origin, location, and episode data when the component mounts or the ID changes
  useEffect(() => {
    fetchCharacterById(Number(id))
      .then((response) => {
        setCharacter(response.data);
        // Fetch origin location if available
        if (response.data.origin.url) {
          fetchLocationById(response.data.origin.url)
            .then((res) => setOrigin(res.data))
            .catch((error) => console.error(error));
        }
        // Fetch current location if available
        if (response.data.location.url) {
          fetchLocationById(response.data.location.url)
            .then((res) => setLocation(res.data))
            .catch((error) => console.error(error));
        }
        // Fetch episode details
        Promise.all(
          response.data.episode.map((episodeUrl: string) =>
            fetchEpisodeById(episodeUrl)
          )
        )
          .then((responses) => setEpisodes(responses.map((res) => res.data)))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [id]);

  // Show a loading message while the character data is being fetched
  if (!character) return <div>Loading...</div>;

  // Render the character details
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
        <ContaineSingleCard>
          {/* Character Image */}
          <CharacterImage src={character.image} alt={character.name} />
          {/* Character Info */}
          <CharacterInfo>
            <h1>{character.name}</h1>
            <InfoRow>Species: {character.species}</InfoRow>
            <InfoRow>Status: {character.status}</InfoRow>
            <InfoRow>Gender: {character.gender}</InfoRow>
            <InfoRow>Type: {character.type}</InfoRow>
          </CharacterInfo>
          {/* Origin Info */}
          <LocationInfo>
            <h2>Origin</h2>
            <InfoRow>Name: {character.origin.name}</InfoRow>
            {origin && (
              <>
                <InfoRow>Dimension: {origin.dimension}</InfoRow>
                <InfoRow>Residents: {origin.residents.length}</InfoRow>
              </>
            )}
          </LocationInfo>
          {/* Current Location Info */}
          <LocationInfo>
            <h2>Current Location</h2>
            <InfoRow>Name: {character.location.name}</InfoRow>
            {location && (
              <>
                <InfoRow>Dimension: {location.dimension}</InfoRow>
                <InfoRow>Residents: {location.residents.length}</InfoRow>
              </>
            )}
          </LocationInfo>
          {/* Episodes List */}
          <h2>Episodes</h2>
          <EpisodesList>
            {episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EpisodeImage src={character.image} alt={episode.name} />
                <EpisodeName>{episode.name}</EpisodeName>
                <p>{episode.episode}</p>
              </EpisodeCard>
            ))}
          </EpisodesList>
        </ContaineSingleCard>
      </div>
    </>
  );
};

export default CharacterDetailPage;
