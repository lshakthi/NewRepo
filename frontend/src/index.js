import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure you create this CSS file or remove this import
import App from './app'; // Importing the App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure you have a div with id="root" in your public/index.html
);
