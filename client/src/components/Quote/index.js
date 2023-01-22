
import React, { useEffect, useState } from "react";

const query = "inspirational";

function Quote() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    getQuoteApiData();
  }, []);

  const getQuoteApiData = async () => {
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${query}`,
      {
        headers: {
          "X-Api-Key": "yCMvFpxTzoD1YpyLGRHvfg==uQKwGLSO5PxwmmxN",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      });
  };

  return (
    <div className="inspiration">
      <p className="quote">{quote}</p>
      <p className="author">-{author}</p>
    </div>
  );
}

export default Quote;

