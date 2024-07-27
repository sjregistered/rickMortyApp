// src/components/Navbar.tsx

import React from 'react';
import { Nav, NavLink } from '../styledComponents/Nav';

/**
 * Navbar component renders the navigation bar with links to different sections of the application.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar: React.FC = () => (
  <Nav>
    {/* Application title */}
    <h1>Rick and Morty</h1>
    <div>
      {/* Navigation links */}
      <NavLink to="/">Characters</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
    </div>
  </Nav>
);

export default Navbar;
