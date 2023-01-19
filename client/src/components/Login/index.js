import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

	return (
    <main>
        <div>
            <h2 className="title">Login</h2>
            {data ? (<p><Link to="/">back to the homepage.</Link></p>) : (
            <form className="scheduleForm" onSubmit={handleFormSubmit}>
                <div className="allignForm">
                <div className="scheduleContainer">
                    <label className="nameLabel">Email:</label>
                    <input
                    className="nameInput"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="scheduleContainer">
                    <label className="nameLabel">Password:</label>
                    <input
                    className="nameInput"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    />
                </div>
                <div className="loginForm">
                <button className="loginButton" style={{ cursor: 'pointer' }} type="submit">Login</button>
                <Link className="logInstead" to="/signup">Sign-up instead</Link>
                </div>
                </div>
            </form>
        )}
        {error && (
            <div>
                {error.message}
            </div>
        )}
        </div>
    </main>
	);
}

export default Login;