import React, { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("Unknown");

  useEffect(() => {
    getQuoteApiData();
  }, []);

  const getQuoteApiData = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
        headers: {
          "X-Api-Key": "1D64zSLzO3OusnJsGZQERg==t3NWmkZDQBLGEADZ",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.length > 0) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        setQuote("No quote found.");
        setAuthor("Unknown");
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch quote.");
      setAuthor("Error");
    }
  };

  return (
    <div className="inspiration">
      <p className="quote">{quote}</p>
      <p className="author">- {author}</p>
    </div>
  );
}

export default Quote;
