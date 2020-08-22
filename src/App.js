import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  },[])

  // const nayoks = [{name:'Jashim', age:35}, {name:'Monir', age: 26}, {name:'Sakib Khan', age:45}]

  return (
    <div className="App">
      <header className="App-header">
        {/* User Defined Component declare */}
        <MyComponent></MyComponent>
        <img src={logo} className="App-logo" alt="logo" />
        {/* Component property or props, for passing data through component */}
        {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)  
        }
        <MovieCounter></MovieCounter>
      
      </header>
    </div>
  );
}

// User defined component 
// Component is case sensative : You must type the component name in Capital later, otherwise it will not work

function MovieCounter(){
  // const [first, second] = ['abc', 'def'] // Or we can write as below :
  // const first = 'abc';
  // const second = 'def';
  // So we can write here :
  const [count, setCount] = useState(1) // A function for state for storing data which may change useState() or we can call hook
  const handleClick = () => setCount(count + 1)
  

  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies : {count}</h3>
      <MovieDisplay movies={count + 1}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
return <h5>Movies I have acted : {props.movies}</h5>
}

function Nayok(props){ // Pass function parameter props as component property. We can use our own property anme or parameter name like : test instead of props
  const nayokStyle = {
    border: '2px solid gray',
    margin: '20px',
    padding: '5px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok : {props.name}</h1> {/* props.name - Passing component property */}
      <h5>I act in movies {props.age} years</h5>
    </div>
  )
}

function MyComponent()
{
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
