import React from "react";

function Nav(props) {
	const { setCurrentTab } = props;

	return (
		<nav>
			<ul>
				<li>
					<span onClick={() => setCurrentTab("home")}>Home</span>
				</li>
				<li>
					<span onClick={() => setCurrentTab("scheduler")}>Scheduler</span>
				</li>
				<li>
					<span onClick={() => setCurrentTab("appointments")}>Appointments</span>
				</li>
				<li>
					<span onClick={() => setCurrentTab("login")}>Login</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
