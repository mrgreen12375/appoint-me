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
					{Auth.loggedIn() ? (<Link to="/scheduler">Scheduler</Link>) : (<Link to="/login">Scheduler</Link>)}
				</li>
				<li>
					{Auth.loggedIn() ? (<Link to="/appointments">Appointments</Link>) : (<Link to="/login">Appointments</Link>)}
				</li>
				<li>
					{Auth.loggedIn() ? (<div onClick={logout}>Logout</div>) : (<Link to="/login">Login</Link>)}
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
