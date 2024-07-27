/**
 * Character interface defines the structure of a character object.
 * It includes properties for the character's ID, name, status, species,
 * type, gender, origin, location, image URL, episodes, URL, and creation date.
 */
export interface Character {
  id: number;                  // Unique identifier for the character
  name: string;                // Name of the character
  status: string;              // Status of the character (e.g., Alive, Dead, Unknown)
  species: string;             // Species of the character (e.g., Human, Alien)
  type: string;                // Type or subtype of the character
  gender: string;              // Gender of the character (e.g., Male, Female)
  origin: {                    // Origin of the character
    name: string;              // Name of the origin location
    url: string;               // URL of the origin location
  };
  location: {                  // Current location of the character
    name: string;              // Name of the current location
    url: string;               // URL of the current location
  };
  image: string;               // URL of the character's image
  episode: string[];           // List of URLs of episodes the character appears in
  url: string;                 // URL of the character's information
  created: string;             // Date when the character was created
}
