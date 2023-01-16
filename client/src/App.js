import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Scheduler from "./components/Scheduler";
import Appointments from "./components/Appointments";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";


function App() {


	return (
		<Router>
			<div>
				<Header></Header>
			</div>
			<div>
				<main>
					<Routes>
						<Route 
							path="/" 
							element={<Home />} 
						/>
						<Route 
							path="/scheduler" 
							element={<Scheduler />} 
						/>
						<Route 
							path="/appointments" 
							element={<Appointments />} 
						/>
						<Route 
							path="/login" 
							element={<Login />} 
						/>
												<Route 
							path="/signup" 
							element={<Signup />} 
						/>
												<Route 
							path="/update" 
							element={<Update />} 
						/>
				</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;