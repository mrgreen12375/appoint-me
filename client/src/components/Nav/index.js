import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

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
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
