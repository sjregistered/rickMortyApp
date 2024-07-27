import styled from 'styled-components';

/**
 * Container component is a styled div element that serves as a flex container.
 * It includes styling for flex display, wrapping, spacing, and padding.
 */

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around; /* Ensure space around the items */
padding: 20px;
`;

/**
 * ContaineSingleCard component is a styled div element that serves as a flex container for a single card.
 * It includes styling for flex direction, alignment, and padding.
 */

export const ContaineSingleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  padding: 20px;
  justify-content : center;
`;