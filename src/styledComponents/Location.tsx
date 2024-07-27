import styled from 'styled-components';

/**
 * LocationName component is a styled h3 element for displaying the location's name.
 * It includes styling for margin.
 */

export const LocationName = styled.h3`
  margin: 10px 0;
`;

/**
 * LocationDetails component is a styled p element for displaying location details.
 * It includes styling for margin, color, text overflow handling, and width.
 */

export const LocationDetails = styled.p`
  margin: 0;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

/**
 * LocationInfo component is a styled div element for displaying additional location information.
 * It includes styling for margin.
 */

export const LocationInfo = styled.div`
margin-bottom: 20px;
`;