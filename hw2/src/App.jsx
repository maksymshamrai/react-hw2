import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "./components/Greeting/Greeting";
import Message from "./components/Message/Message";
import Button from "./components/Button/Button";


function App() {

    const handleClick = () => {
        console.log("Кнопку натиснуто!");
    };

  return (
    <>
      <Greeting name="Максим" />
      <Message text="Це моє перше домашнє завдання з React" />
      <Button onClick={handleClick} />
    </>
  )
}

export default App
