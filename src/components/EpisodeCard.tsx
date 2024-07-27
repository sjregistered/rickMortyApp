import React from "react";
import { Link } from "react-router-dom";
import Card from "../styledComponents/Card";
import { EpisodeCardProps } from "../interfaces/EpisodeCardProps";
import { EpisodeDetails, EpisodeName } from "../styledComponents/Episode";

/**
 * EpisodeCard component displays individual episode information
 * in a card format with a link to the episode's detailed page.
 *
 * @param {EpisodeCardProps} episode - The episode information to display.
 * @returns {JSX.Element} The rendered EpisodeCard component.
 */
const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => (
  // Link component from react-router-dom for navigation to episode detail page
  <Link to={`/episode/${episode.id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <EpisodeName>{episode.name}</EpisodeName>
      <EpisodeDetails>{episode.air_date}</EpisodeDetails>
      <EpisodeDetails>{episode.episode}</EpisodeDetails>
    </Card>
  </Link>
);

export default EpisodeCard;
