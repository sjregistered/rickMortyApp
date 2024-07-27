// src/services/api.ts

import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

/**
 * Fetches a list of characters from the API with pagination, search, and filters.
 *
 * @param {number} page - The page number for pagination.
 * @param {string} name - The name filter for searching characters.
 * @param {object} filters - Additional filters for the request.
 * @returns {Promise} - Axios response promise with the list of characters.
 */
export const fetchCharacters = (page: number, name: string, filters: object) => {
  return axios.get(`${API_URL}/character`, {
    params: { page, name, ...filters },
  });
};

/**
 * Fetches a character by ID from the API.
 *
 * @param {number} id - The ID of the character.
 * @returns {Promise} - Axios response promise with the character data.
 */
export const fetchCharacterById = (id: number) => {
  return axios.get(`${API_URL}/character/${id}`);
};

/**
 * Fetches a list of locations from the API with pagination, search, and filters.
 *
 * @param {number} page - The page number for pagination.
 * @param {string} name - The name filter for searching locations.
 * @param {object} filters - Additional filters for the request.
 * @returns {Promise} - Axios response promise with the list of locations.
 */
export const fetchLocations = (page: number, name: string, filters: object) => {
  return axios.get(`${API_URL}/location`, {
    params: { page, name, ...filters },
  });
};

/**
 * Fetches a location by ID from the API.
 *
 * @param {number} id - The ID of the location.
 * @returns {Promise} - Axios response promise with the location data.
 */
export const fetchLocationById = (id: number) => {
  return axios.get(`${API_URL}/location/${id}`);
};

/**
 * Fetches a list of episodes from the API with pagination, search, and filters.
 *
 * @param {number} page - The page number for pagination.
 * @param {string} name - The name filter for searching episodes.
 * @param {object} filters - Additional filters for the request (e.g., season).
 * @returns {Promise} - Axios response promise with the list of episodes.
 */
export const fetchEpisodes = (page: number, name: string, filters: { season?: string }) => {
  return axios.get(`${API_URL}/episode`, {
    params: { page, name, ...filters },
  });
};

/**
 * Fetches an episode by URL from the API.
 *
 * @param {string} url - The URL of the episode.
 * @returns {Promise} - Axios response promise with the episode data.
 */
export const fetchEpisodeById = (url: string) => {
  return axios.get(url);
};
