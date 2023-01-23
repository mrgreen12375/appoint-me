import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
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
  
      setFormState({
        email: '',
        password: '',

      });

  };

  return (
    <main>
      <div>
        <h2 className="title">Login</h2>
        {data ? (
          <p>
          </p>
        ) : (
          <form className="scheduleForm" onSubmit={handleFormSubmit}>
            <div className="allignForm">
              <div className="scheduleContainer">
                <label className="nameLabel">Email:</label>
                <input
                  className="emailInput"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className="scheduleContainer">
                <label className="nameLabel">Password:</label>
                <input
                  className="passwordInput"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className="loginForm">
                <button
                  className="loginButton"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Login
                </button>
                <Link className="logInstead" to="/signup">
                  Sign-up instead
                </Link>
              </div>
            </div>
          </form>
        )}
        {error && <div className = "loading">{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
