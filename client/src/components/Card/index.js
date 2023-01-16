import React from 'react';
import { Link } from 'react-router-dom';

function Card() {

	return (
        <div className="center">
            <div className="appointmentCard">
            <Link className="edit" to="/update">Edit</Link>
                <div className="row">
                    <h3>Name:</h3>
                    <p>Project 3 Meeting</p>
                </div>
                <div className="row">
                    <h3>Date:</h3>
                    <p>01/14/2023</p>
                </div>
                <div className="row">
                    <h3>Time:</h3>
                    <p>10:00AM</p>
                </div>
                <div className="row">
                    <h3>Message:</h3>
                    <p>Need to pick tasks and work on overall vision</p>
                </div>
            </div>
        </div>
	);
}

export default Card;
