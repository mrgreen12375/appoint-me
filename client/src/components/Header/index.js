import React from "react";
import Nav from "../Nav";

function Header() {

	return (
		<header>
			<div className = "appointMe">
				<h1>Appoint</h1><h1 className = "me">Me!</h1>
			</div>
			<div>
				<Nav></Nav>
			</div>
		</header>
	);
}

export default Header;
