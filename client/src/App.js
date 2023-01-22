import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Scheduler from "./components/Scheduler";
import Appointments from "./components/Appointments";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";

const httpLink = createHttpLink({
	uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {

	const token = localStorage.getItem('id_token');

	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
	  },
	};
  });
  
  const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
  });

function App() {

	return (
		<ApolloProvider client={client}>
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
		</ApolloProvider>
	);
}

export default App;