import styled from "styled-components";

/**
 * CharacterName component is a styled h3 element for displaying the character's name.
 * It includes styling for margin, text decoration, color, font weight, and text overflow handling.
 */

export const CharacterName = styled.h3`
  margin: 10px 0;
  text-decoration: none;
  color: black;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;

  &:hover {
    color: #007bff;
  }
`;

/**
 * CharacterImage component is a styled img element for displaying the character's image.
 * It includes styling for size, border radius, object fit, and margin.
 */

export const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

/**
 * CharacterInfo component is a styled div element for displaying additional character information.
 * It includes styling for text alignment and margin.
 */

export const CharacterInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

/**
 * CharacterDetails component is a styled p element for displaying character details.
 * It includes styling for margin, color, text overflow handling, and text alignment.
 */

export const CharacterDetails = styled.p`
  margin: 0;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;
