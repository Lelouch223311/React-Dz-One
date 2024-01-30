// Импортируем всякое
import './App.css';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material'
import { Generator } from './components/Genik';

function App() {


  let [number, setNumber] = useState(0) // number это наше число (изначально: 0)
  // setNumber это наша "функция" которая обновляет значение number
  const clickThis = () =>{

    setNumber(number = Math.floor(Math.random() * 530)) // Само обновления значения,на рандомное число/цифру.

  }

  return (
    <div className="App">
      <header className="App-header">
      <Generator number={number}/>  {/*  Generator это  компонент который принимает props number(Genik.jsx) */}
      <Button onClick={clickThis}>Показать рандом число/цифру</Button> {/* Сама кнопка через MUI */}
      </header>
    </div>
  );
}

export default App;
