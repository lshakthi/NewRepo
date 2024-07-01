import React from 'react';
import './App.css'; // Make sure you create this CSS file or remove this import
import Component from './component'; // Importing the Component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
        <Component /> {/* Using the Component */}
      </header>
    </div>
  );
}

export default App;
