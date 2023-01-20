import React from "react";
import Card from "../Card";
import { useQuery } from "@apollo/client";
import { GET_APTS } from "../../utils/queries";

function Appointments() {
  const { loading, data } = useQuery(GET_APTS);
  const appointments = data?.me.appointments || [];
  return (
    <main>
      <h2 className="title">Appointments</h2>
      {loading ? <h2>Loading...</h2> : <Card appointments={appointments} />}
    </main>
  );
}

export default Appointments;
