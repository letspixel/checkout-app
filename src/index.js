import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './assets/css/font-awesome.min.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
