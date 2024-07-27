import styled from "styled-components";
import { Container } from "./ContainerDivs";

/**
 * InfoRow component is a styled paragraph element for displaying rows of information.
 * It includes styling for margin and font size.
 */

export const InfoRow = styled.p`
  margin: 5px 0;
  font-size: 18px;
`;

/**
 * PageWrapper component is a styled div element that serves as a wrapper for pages.
 * It includes styling for flexbox layout, alignment, and padding.
 */

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

/**
 * LocationsContainer component is a styled div element that serves as a container for locations.
 * It extends the Container component and includes additional styling for flexbox layout.
 */

export const LocationsContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;