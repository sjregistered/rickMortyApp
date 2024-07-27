import styled from "styled-components";

/**
 * Card component is a styled div that serves as a container for various content.
 * It has a border, rounded corners, and padding for a neat appearance.
 * The Card component also includes hover effects for a better user experience.
 */

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
