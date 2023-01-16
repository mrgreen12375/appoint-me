import React from 'react';

function Home(props) {

	return (
	<main>
		<h2 className="title">Welcome, Steven</h2>
		<div className="inspiration">
			<h2>Inspirational Quote</h2>
			{props.results.map((result) => (
			<p className="quote" key={result.id}>{result.quote}</p>
			))}
		</div>
	</main>
	);
}

export default Home;
