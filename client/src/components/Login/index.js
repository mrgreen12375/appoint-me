import React from 'react';


function Login() {

	return (
    <main>
        <h2 className="title">Login</h2>
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
                    <button className="loginButton">Login</button>
                </div>
            </div>
        </form>
    </main>
	);
}

export default Login;