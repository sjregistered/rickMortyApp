/**
 * Location interface defines the structure of a location object.
 * It includes properties for the location's ID, name, type, dimension,
 * residents, URL, and creation date.
 */

export interface Location {
  id: number;            // Unique identifier for the location
  name: string;          // Name of the location
  type: string;          // Type of the location (e.g., Planet, Space station)
  dimension: string;     // Dimension where the location exists
  residents: string[];   // List of URLs of residents in the location
  url: string;           // URL of the location's information
  created: string;       // Date when the location was created
}
