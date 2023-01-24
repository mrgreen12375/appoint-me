import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_APT } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Card({ appointments }) {
  const navigate = useNavigate();

  const [deleteAppt] = useMutation(DELETE_APT);
  if (!appointments.length) {
    return <h2 className="noAppointments">No appointments yet!</h2>;
  }
  const handleDelete = async (appointID) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      console.log("log in first!");
      return false;
    }

    try {
      console.log(appointID);
      await deleteAppt({ variables: { appointId: appointID } });
    } catch (error) {
      console.error(error);
    }
    navigate("/appointments");
    window.location.reload();
  };
  return (
    <div className="center">
      {appointments.map((appointment) => (
        <div className="appointmentCard" key={appointment._id}>
          <div className="apptBtns">
            <Link className="edit" to="/update" state={appointment}>
              Edit
            </Link>
            <div className="split">
              <Link
                className="delete"
                to="/appointments"
                onClick={() => handleDelete(appointment._id)}
              >
                Delete
              </Link>
            </div>
          </div>
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
