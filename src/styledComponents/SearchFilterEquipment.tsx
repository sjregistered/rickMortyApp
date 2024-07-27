import styled from 'styled-components';

/**
 * SearchForm component is a styled form element for creating a search form.
 * It includes styling for flexbox layout, alignment, and margin.
 */

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

/**
 * Input component is a styled input element for form inputs.
 * It includes styling for padding, margin, border, border-radius, and width.
 */

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

/**
 * Select component is a styled select element for dropdowns.
 * It includes styling for padding, margin, border, border-radius, and width.
 */

export const Select = styled.select`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

/**
 * Button component is a styled button element for form buttons.
 * It includes styling for padding, border, border-radius, background color, text color, margin, and cursor.
 * Additionally, it includes a hover effect for background color.
 */

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
