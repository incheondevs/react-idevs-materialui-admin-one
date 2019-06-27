import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history.js'
import App from './components/App.js';

const app = (
    <Router history={ history }>
        <App />
    </Router>
);

ReactDOM.render(app, document.getElementById('root') );
