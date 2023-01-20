import React from "react";
import { Link } from "react-router-dom";

function Card({ appointments }) {
  if (!appointments.length) {
    return <h2>No appointments yet!</h2>;
  }
  return (
    <div className="center">
      {appointments.map((appointment) => (
        <div className="appointmentCard" key={appointment._id}>
          <Link className="edit" to="/update">
            Edit
          </Link>
          <div className="row">
            <h3>Name:</h3>
            <p>{appointment.name}</p>
          </div>
          <div className="row">
            <h3>Date:</h3>
            <p>
              {appointment.month}/{appointment.day}/{appointment.year}
            </p>
          </div>
          <div className="row">
            <h3>Time:</h3>
            <p>{appointment.time}</p>
          </div>
          <div className="row">
            <h3>Message:</h3>
            <p>{appointment.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
