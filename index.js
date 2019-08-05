import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return <div>Hello World</div>;
};

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
