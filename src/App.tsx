// src/App.tsx

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import EpisodesPage from "./pages/EpisodesPage";
import EpisodeDetailPage from "./pages/EpisodeDetailPage";
import LocationsPage from "./pages/LocationsPage";
import LocationDetailPage from "./pages/LocationDetailPage";
import Navbar from "./components/Navbar";

/**
 * App component serves as the main entry point of the application.
 * It sets up the router and defines the routes for different pages.
 *
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetailPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/episode/:id" element={<EpisodeDetailPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/location/:id" element={<LocationDetailPage />} />
    </Routes>
  </Router>
);

export default App;
