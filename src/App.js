import logo from './logo.svg';
import './App.css';
import Person from './Person';
import { useState,useEffect } from 'react';
import FetchData from './FetchData';
import { createStore } from 'redux';



function App() {
 
  let currentState = 0;
  const [persons,setPersons] = useState([
    {nome:'Pippo',eta:30},
    {nome:'Pluto',eta:45},
    {nome:'Gastone',eta:40}
  ]);

  const [value,setValue] = useState(0)
  const [valuenum,setValuenum] = useState(0)

  const reducer = (state=0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log("stateinc",state)
        return state + 1;
      case 'DECREMENT':
        console.log("statedec",state)
        return state - 1;
      default:
        return state;
    }
 
  };
 
  const store = createStore(reducer);


  useEffect(() => {
    console.log("--Value state -> Hook Use Effect Invocation --");
  
  },[]);


  const incState = () => {
    store.dispatch({
      type: 'INCREMENT'
     
    });
  
  }

  const decState = () => {
    store.dispatch({
      type: 'DECREMENT'
     
    });
    
  }



  store.subscribe(() => {
    console.log('current state', store.getState());
   
    
  });

  const changeState = () => {
    setPersons(
      [
        {nome:'Pippo-XXXX',eta:30},
        {nome:'Pluto-YYYY',eta:45},
        {nome:'Gastone',eta:60}
      ],
     
    )
    setValue((val)=>{val = val+1;return val});
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={changeState}>Change!</button>
        <button onClick={incState}>Increment!</button>
        <button onClick={decState}>Decrement!</button>
        <Person key={1}
        nome = {persons[0].nome}
        eta = {persons[0].eta}
      />
      <Person key={2}
        nome = {persons[1].nome}
        eta = {persons[1].eta}
      />
      <Person key={3}
        nome = {persons[2].nome}
        eta = {persons[2].eta}
      />
      
      <p>STATE:{valuenum}</p>
      

      <p>VAL:{value}</p>
      <FetchData  key={4} />

     
      
      </header>
    </div>
  );
}

export default App;
