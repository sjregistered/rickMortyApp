/**
 * Episode interface defines the structure of an episode object.
 * It includes properties for the episode's ID, name, air date, episode code,
 * characters, URL, and creation date.
 */

export interface Episode {
  id: number;             // Unique identifier for the episode
  name: string;           // Name of the episode
  air_date: string;       // Air date of the episode
  episode: string;        // Episode code (e.g., "S01E01")
  characters: string[];   // List of URLs of characters appearing in the episode
  url: string;            // URL of the episode's information
  created: string;        // Date when the episode was created
}
