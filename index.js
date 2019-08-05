import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import MainLayout from './src/Main/MainLayout';

const App = () => {
	return (
		<React.Fragment>
			<MainLayout />
		</React.Fragment>
	);
};

const mountNode = document.getElementById('app');
ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>, mountNode);
