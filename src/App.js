
import './App.css';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material'
import { Generator } from './components/Genik';

function App() {


  let [number, setNumber] = useState(0)
  const clickThis = () =>{

    setNumber(number = Math.floor(Math.random() * 530))

  }

  return (
    <div className="App">
      <header className="App-header">
      <Generator number={number}/> 
      <Button onClick={clickThis}>Показать рандом число/цифру</Button>
      </header>
    </div>
  );
}

export default App;
