import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Global, css } from '@emotion/core';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import MainLayout from './Main/MainLayout';

const App = () => {
	const globalStyles = css`
		height: 100%;
		width: 100%;
	`;

	return (
		<React.Fragment>
			<Global styles={globalStyles} />
			<MainLayout />
		</React.Fragment>
	);
};

const mountNode = document.getElementById('app');
ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>, mountNode);
