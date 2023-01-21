import React from "react";
import Auth from "../../utils/auth";
import Quote from "../Quote";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const username = data?.me.username || [];
  return (
    <main>
      <h2 className="title">
        {Auth.loggedIn() ? (
          <h2 className="title">Welcome, {loading ? "uhhhh" : username}</h2>
        ) : (
          <h2 className="title"> </h2>
        )}
      </h2>
      <Quote></Quote>
    </main>
  );
}

export default Home;
