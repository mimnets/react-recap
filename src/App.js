import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jashim', 'Monir', 'Sakib Khan']
  return (
    <div className="App">
      <header className="App-header">
        {/* User Defined Component declare */}
        <MyComponent></MyComponent>
        <img src={logo} className="App-logo" alt="logo" />
        {/* Component property or props, for passing data through component */}
        <Nayok name={nayoks[1]}></Nayok>
        <Nayok name={nayoks[0]}></Nayok>
        <Nayok></Nayok>
        <Nayok></Nayok>
      
      </header>
    </div>
  );
}

// User defined component 
// Component is case sensative : You must type the component name in Capital later, otherwise it will not work

function Nayok(props){ // Pass function parameter props as component property. We can use our own property anme or parameter name like : test instead of props
  const nayokStyle = {
    border: '2px solid gray',
    margin: '20px',
    padding: '5px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok : {props.name}</h1> {/* props.name - Passing component property */}
      <h5>Amar Nayika Hosse : </h5>
    </div>
  )
}

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
