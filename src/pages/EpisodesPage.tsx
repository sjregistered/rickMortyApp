import React, { useCallback, useEffect, useState } from 'react';
import { fetchEpisodes } from '../services/api';
import { Episode } from '../interfaces/Episode';
import EpisodeCard from '../components/EpisodeCard';
import { Container } from '../styledComponents/ContainerDivs';
import { SearchForm, Input, Button } from '../styledComponents/SearchFilterEquipment';

/**
 * EpisodesPage component fetches and displays a list of episodes.
 * It includes a search form for filtering episodes by name.
 *
 * @returns {JSX.Element} The rendered EpisodesPage component.
 */
const EpisodesPage: React.FC = () => {
  // State to hold the list of episodes
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  // State for pagination
  const [page, setPage] = useState(1);
  // State for episode name filter
  const [name, setName] = useState('');
  // State for episode season filter
  const [season, setSeason] = useState('');
  // State to indicate loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch and set episodes
  const fetchAndSetEpisodes = useCallback(() => {
    setLoading(true);
    fetchEpisodes(page, name, { season })
      .then((response) => {
        setEpisodes((prev) => [...prev, ...response.data.results]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page, name, season]);

  // Effect to fetch episodes when the component mounts or dependencies change
  useEffect(() => {
    fetchAndSetEpisodes();
  }, [fetchAndSetEpisodes]);

  // Effect to handle infinite scroll for loading more episodes
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  // Function to handle the search form submission
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setEpisodes([]);
    setPage(1);
    fetchAndSetEpisodes();
  };

  // Function to handle the season filter change
  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeason(event.target.value);
    setPage(1);
    setEpisodes([]);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SearchForm onSubmit={handleSearch}>
          {/* Input for episode name */}
          <Input
            type="text"
            placeholder="Episode Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Button to submit the search form */}
          <Button type="submit">Search</Button>
        </SearchForm>
      </div>
      <Container>
        {/* Render each episode in the list */}
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
        {/* Show loading indicator if data is being fetched */}
        {loading && <p>Loading...</p>}
      </Container>
    </>
  );
};

export default EpisodesPage;
