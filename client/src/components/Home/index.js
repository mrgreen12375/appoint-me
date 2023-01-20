import React from "react";
import Auth from "../../utils/auth";
import Quote from "../Quote";

function Home() {
  return (
    <main>
      <h2 className="title">
        {Auth.loggedIn() ? (
          <h2 className="title">Welcome</h2>
        ) : (
          <h2 className="title"> </h2>
        )}
      </h2>
      <Quote></Quote>
    </main>
  );
}

export default Home;
