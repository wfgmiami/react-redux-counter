import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/js/redux/store';
import App from './src/js/react/App';
import './src/css/bootstrap.css';

const root = document.getElementById('app');

const route = (
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

render(route, root);