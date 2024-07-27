import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * NavLink component is a styled Link element from react-router-dom.
 * It includes styling for margin, color, text decoration, and font weight.
 * Additionally, it includes a hover effect for underline text decoration.
 */

export const NavLink = styled(Link)`
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * Nav component is a styled nav element for the navigation bar.
 * It includes styling for background color, padding, flexbox layout, and text color.
 */

export const Nav = styled.nav`
  background: #282c34;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

