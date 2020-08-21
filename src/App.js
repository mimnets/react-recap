import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* User Defined Component declare */}
        <MyComponent></MyComponent>
        <img src={logo} className="App-logo" alt="logo" />
        
      
      </header>
    </div>
  );
}

// User defined component 
// Component is case sensative : You must type the component name in Capital later, otherwise it will not work
function MyComponent(){
  const myComponentStyle = { // We can declare style a component
    border: '2px solid white',
    margin: '5px 5px',
    padding: '5px 5px'
  }
  return (
    <div style={myComponentStyle}>
      <h1>This is a user defined Component</h1>
    </div>
  )
}

export default App;
