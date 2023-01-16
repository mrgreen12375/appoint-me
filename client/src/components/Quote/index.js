import { useState, useEffect } from 'react';
import Home from './home';

// Import our search method
import search from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchQuote = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchQuote('inspirational');
  }, []);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <Home results={results} />
    </div>
  );
};

export default SearchResultContainer;