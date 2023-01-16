import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {

	return (
    <main>
        <h2 className="title">Sign-up</h2>
        <form className="scheduleForm">
            <div className="allignForm">
                <div className="scheduleContainer">
                    <div className="scheduleContainer">
                        <label className="nameLabel">Username:</label>
                        <input className="nameInput" type="text" name="nameField" id="name-input"/>
                    </div>
                    <div className="scheduleContainer">
                        <label className="emailLabel">Email:</label>
                        <input className="emailInput" type="text" name="nameField" id="name-input"/>
                    </div>
                    <div className="scheduleContainer">
                        <label className="nameLabel">Password:</label>
                        <input className="nameInput" type="text" name="nameField" id="name-input"/>
                    </div>
                    <div className="loginForm">
                    <button className="loginButton">Sign-up</button>
                    <Link className="logInstead" to="/login">Login instead</Link>
                    </div>
                </div>
            </div>
        </form>
    </main>
	);
}

export default Signup;