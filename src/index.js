import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootswatch/dist/lux/bootstrap.min.css'
import './assets/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
