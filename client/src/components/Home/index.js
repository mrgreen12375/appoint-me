import React from 'react';
import Auth from '../../utils/auth';

function Home() {

	return (
	<main>
		<h2 className="title"> 
			{Auth.loggedIn() 
				? (<h2 className="title">Welcome</h2>)
				: (<h2 className="title"> </h2>)
			} 
		</h2>
		<div className="inspiration">
			<h2>Inspirational Quote</h2>
			<p className="quote">“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”</p>
		</div>
	</main>
	);
}

export default Home;


//<main>
//<h2 className="title">Welcome, Steven</h2>
//<div className="inspiration">
	//<h2>Inspirational Quote</h2>
	//{props.results.map((result) => (
	//<p className="quote" key={result.id}>{result.quote}</p>
	//))}
//</div>
//</main>