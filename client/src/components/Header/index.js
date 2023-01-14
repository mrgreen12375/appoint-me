import React from "react";
import Nav from "../Nav";

function Header(props) {
	const { setCurrentTab } = props;

	return (
		<header>
			<h1>Appoint Me</h1>
			<div>
				<Nav setCurrentTab={setCurrentTab}></Nav>
			</div>
		</header>
	);
}

export default Header;
