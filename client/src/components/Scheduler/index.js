import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_APT } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Scheduler() {
  const [formState, setFormState] = useState({
    name: "",
    message: "",
    day: "",
    month: "",
    year: "",
    time: "",
  });
  const [createAppt, { error }] = useMutation(CREATE_APT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      console.log("invalid token");
      return false;
    }

    try {
      const { data } = await createAppt({
        variables: { input: formState },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    window.location.assign("/");
  };
  return (
    <main>
      <h2 className="title">Scheduler</h2>
      <form className="scheduleForm" onSubmit={handleFormSubmit}>
        <div className="allignForm">
          <div className="scheduleContainer">
            <div className="scheduleContainer">
              <label className="nameLabel">Name:</label>
              <input
                className="nameInput"
                type="text"
                name="name"
                id="name-input"
                value={formState.name}
                onChange={handleChange}
              />
            </div>
            <label className="label">Date:</label>
            <select
              className="date"
              id="month"
              name="month"
              value={formState.month}
              onChange={handleChange}
            >
              <option>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              className="date"
              id="month"
              name="day"
              value={formState.day}
              onChange={handleChange}
            >
              <option>Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select
              className="date"
              id="year"
              name="year"
              value={formState.year}
              onChange={handleChange}
            >
              <option>Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
          </div>
          <div className="scheduleContainer">
            <label className="label">Time:</label>
            <select
              className="date"
              id="hour"
              name="time"
              value={formState.time}
              onChange={handleChange}
            >
              <option>Hour</option>
              <option value="12:00AM">12:00AM</option>
              <option value="1:00AM">1:00AM</option>
              <option value="2:00AM">2:00AM</option>
              <option value="3:00AM">3:00AM</option>
              <option value="4:00AM">4:00AM</option>
              <option value="5:00AM">5:00AM</option>
              <option value="6:00AM">6:00AM</option>
              <option value="7:00AM">7:00AM</option>
              <option value="8:00AM">8:00AM</option>
              <option value="9:00AM">9:00AM</option>
              <option value="10:00AM">10:00AM</option>
              <option value="11:00AM">11:00AM</option>
              <option value="12:00PM">12:00PM</option>
              <option value="1:00PM">1:00PM</option>
              <option value="2:00PM">2:00PM</option>
              <option value="3:00PM">3:00PM</option>
              <option value="4:00PM">4:00PM</option>
              <option value="5:00PM">5:00PM</option>
              <option value="6:00PM">6:00PM</option>
              <option value="7:00PM">7:00PM</option>
              <option value="8:00PM">8:00PM</option>
              <option value="9:00PM">9:00PM</option>
              <option value="10:00PM">10:00PM</option>
              <option value="11:00PM">11:00PM</option>
            </select>
          </div>
          <div className="scheduleContainer">
            <label className="messageLabel">Message:</label>
            <textarea
              className="messageInput"
              type="text"
              name="message"
              id="message-input"
              value={formState.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="loginForm">
            <button
              className="loginButton"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </div>
      </form>
      {error && <div className="loading">{error.message}</div>}
    </main>
  );
}

export default Scheduler;
