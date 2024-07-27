import { useEffect, useState } from "react";

/**
 * useDebounce custom hook returns a debounced value after a specified delay.
 * It is useful for delaying a state change until after a certain period of time has passed.
 *
 * @param {number} timer - The debounce delay in milliseconds.
 * @param {string} data - The data to be debounced.
 * @returns {string} The debounced value.
 */
const useDebounce = (timer: number, data: string) => {
  // State to hold the debounced value
  const [value, setValue] = useState(data);

  // Effect to handle the debouncing
  useEffect(() => {
    // Set a timeout to update the value after the specified delay
    const timeOut = setTimeout(() => {
      setValue(data);
    }, timer);

    // Clear the timeout if the data or timer changes before the delay is over
    return () => {
      clearTimeout(timeOut);
    };
  }, [data, timer]);

  // Return the debounced value
  return value;
};

export default useDebounce;
