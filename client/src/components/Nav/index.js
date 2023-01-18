import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	  };
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/scheduler">Scheduler</Link>
				</li>
				<li>
					<Link to="/appointments">Appointments</Link>
				</li>
				<li>
					{Auth.loggedIn() ? (<li onClick={logout}>Logout</li>) : (<Link to="/login">Login</Link>)}
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
