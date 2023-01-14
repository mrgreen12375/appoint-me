import React from 'react';


function Signup() {

	return (
    <main>
        <h2 className="title">Signup</h2>
        <form className="scheduleForm">
            <div className="allignForm">
                <div className="scheduleContainer">
                    <div className="scheduleContainer">
                        <label className="nameLabel">Username:</label>
                        <input className="nameInput" type="text" name="nameField" id="name-input"/>
                    </div>
                    <div className="scheduleContainer">
                        <label className="nameLabel">Password:</label>
                        <input className="nameInput" type="text" name="nameField" id="name-input"/>
                    </div>
                    <a className="scheduleButton" href='../Appontments'>Signup</a>
                    <a className="logInstead" href="signup">Login instead</a>
                </div>
            </div>
        </form>
    </main>
	);
}

export default Signup;