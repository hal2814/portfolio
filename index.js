import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './config/store';

const App = () => {
	return <div>Hello World</div>;
};

const mountNode = document.getElementById('app');
ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>, mountNode);
