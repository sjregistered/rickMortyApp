import styled from "styled-components";

/**
 * EpisodeCard component is a styled anchor element that serves as a card for displaying episode information.
 * It includes styling for border, padding, width, text decoration, color, and flexbox layout.
 */

export const EpisodeCard = styled.a`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * EpisodeDetails component is a styled paragraph element for displaying episode details.
 * It includes styling for margin, color, text overflow handling, and text alignment.
 */

export const EpisodeDetails = styled.p`
  margin: 0;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;

/**
 * EpisodeImage component is a styled img element for displaying the episode's image.
 * It includes styling for size, object fit, and margin.
 */

export const EpisodeImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

/**
 * EpisodeName component is a styled h3 element for displaying the episode's name.
 * It includes styling for margin, text decoration, color, font weight, and text overflow handling.
 */

export const EpisodeName = styled.h3`
  margin: 10px 0;
  text-decoration: none;
  color: black;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;

/**
 * EpisodesList component is a styled div element that serves as a container for a list of episode cards.
 * It includes styling for flexbox layout, wrapping, and content justification.
 */
export const EpisodesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
