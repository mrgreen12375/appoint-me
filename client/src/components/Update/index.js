import React from 'react';
import { Link } from 'react-router-dom';

function Update() {

	return (
	<main>
        <h2 className="title">Appointment</h2>
        <form className="scheduleForm">
            <div className="allignForm">
                <div className="scheduleContainer">
                    <div className="scheduleContainer">
                        <label className="nameLabel">Name:</label>
                        <input className="nameInput" type="text" name="nameField" id="name-input"/>
                    </div>
                    <label className="label">Date:</label>
                    <select className="date" id="month">
                        <option value="0">Month</option>
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
                    <select className="date" id="month">
                        <option value="0">Day</option>
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
                    <select className="date" id="year">
                        <option value="0">Year</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <div className="scheduleContainer">
                    <label className="label">Time:</label>
                    <select className="date" id="hour">
                        <option value="0">Hour</option>
                        <option value="1">12:00AM</option>
                        <option value="2">1:00AM</option>
                        <option value="3">2:00AM</option>
                        <option value="4">3:00AM</option>
                        <option value="5">4:00AM</option>
                        <option value="6">5:00AM</option>
                        <option value="7">6:00AM</option>
                        <option value="8">7:00AM</option>
                        <option value="9">8:00AM</option>
                        <option value="10">9:00AM</option>
                        <option value="11">10:00AM</option>
                        <option value="12">11:00AM</option>
                        <option value="13">12:00PM</option>
                        <option value="14">1:00PM</option>
                        <option value="15">2:00PM</option>
                        <option value="16">3:00PM</option>
                        <option value="17">4:00PM</option>
                        <option value="18">5:00PM</option>
                        <option value="19">6:00PM</option>
                        <option value="20">7:00PM</option>
                        <option value="21">8:00PM</option>
                        <option value="22">9:00PM</option>
                        <option value="23">10:00PM</option>
                        <option value="24">11:00PM</option>
                    </select>
                </div>
                <div className="scheduleContainer">
                    <label className="messageLabel">Message:</label>
                    <textarea className="messageInput" type="text" name="messageField" id="message-input"></textarea>
                </div>
                <Link className="scheduleButton" to="/appointments">Update</Link>
                <Link className="scheduleButton" to="/appointments">Delete</Link>
            </div>
        </form>
    </main>
	);
}

export default Update;