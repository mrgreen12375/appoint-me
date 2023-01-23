import React from "react";
import Auth from "../../utils/auth";
import Quote from "../Quote";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const username = data?.me.username || [];
  return (
    <main>
      <div className="title">
        {Auth.loggedIn() ? (
<<<<<<< HEAD
          <h1 className="title">Welcome, {loading ? "uhhhh" : username}</h1>
=======
          <h2 className="title">Welcome, {loading ? "" : username}</h2>
>>>>>>> e6a19f9fdf6d9ceabb7bb6d479155e0b1bd9a480
        ) : (
          <h2 className="title"> </h2>
        )}
      </div>
      <Quote></Quote>
    </main>
  );
}

export default Home;
