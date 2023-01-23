import React, { useEffect, useState } from "react";

const query = "inspirational";

function Quote() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    getQuoteApiData();
  }, []);

  const getQuoteApiData = async () => {
<<<<<<< HEAD
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${query}`, {
      headers: {
        "X-Api-Key": "yCMvFpxTzoD1YpyLGRHvfg==uQKwGLSO5PxwmmxN",
        //"Access-Control-Allow-Origin":"*",
        //"Content-Type":"application/json"
      },
    })
=======
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${query}`,
      {
        headers: {
          "X-Api-Key": "yCMvFpxTzoD1YpyLGRHvfg==uQKwGLSO5PxwmmxN",
        },
      }
    )
>>>>>>> e6a19f9fdf6d9ceabb7bb6d479155e0b1bd9a480
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0]);
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
