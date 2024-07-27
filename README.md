# Getting Started with Rick & Morty App

This project was bootstrapped with Create React App.
(https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.

### Creating Test Files

Test files can be created in the src/test
directory. The naming convention for test files should follow the pattern: ComponentName.test.tsx.

-------------------------------------------------------
import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from '../components/ExampleComponent';

test('renders ExampleComponent', () => {
  const { getByText } = render(<ExampleComponent />);
  const linkElement = getByText(/example/i);
  expect(linkElement).toBeInTheDocument();
});
-------------------------------------------------------

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the project in the git hub pages of the same repository. 

### Project Architecure 

The project follows a standard React architecture with a few customizations for better organization and scalability:

=> src/components: Contains reusable UI components.
=>  src/pages: Contains different pages/screens of the application.
=> src/services: Contains API service files for fetching data.
=> src/interfaces: Contains TypeScript interfaces for defining data structures.
=> src/styledComponents: Contains styled components for consistent styling across the app.
=> src/custom_hooks: Contains custom React hooks.
=> src/tests: Contains test files for various components and pages.


# Application Overview

This application is a Rick and Morty character and episode explorer. Users can search for characters, view their details, and explore the episodes they appear in. Similarly, users can search for locations and view details about them.


# Features

=> Character Search: Search for characters by name and filter by status.
=> Character Details: View detailed information about a character, including origin, current location, and => episodes they appear in.
=> Location Search: Search for locations by name and filter by type.
=> Location Details: View detailed information about a location, including residents.

# Hosting
This application is hosted on GitHub Pages. You can view the live application at:

==>> https://sjregistered.github.io/rickMortyApp




