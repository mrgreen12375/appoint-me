import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Scheduler from "./components/Scheduler";
import Appointments from "./components/Appointments";
import Login from "./components/Login";

function App() {
	const [currentTab, setCurrentTab] = useState("home");

	const renderTab = () => {
		switch (currentTab) {
			case "home":
				return <Home />;
			case "scheduler":
				return <Scheduler />;
			case "appointments":
				return <Appointments />;
			case "login":
				return <Login />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div>
				<Header setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
		</div>
	);
}

export default App;