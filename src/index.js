import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App';
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.js"
import "bootstrap/dist/js/bootstrap.min.js"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

