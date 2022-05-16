import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/home.css"

function Home() {
  const [dateUser, setDate] = useState("");
  const [isInvalidDate, setIsInvalidDate] = useState(false)
  const history = useHistory();

  const  handleChange = ({target}) => {
    setDate(`${target.value} 00:00:00`);
  }

  const discoveryDateNow = () => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = (dateNow.getMonth() + 1);
    const day = dateNow.getDate();
    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const hendleSubmit = () => {
      const dateNow = discoveryDateNow();
    if (new Date(dateNow) > new Date(dateUser)) {
      setIsInvalidDate(true)
    } else {
      const dateNow = discoveryDateNow();
      localStorage.setItem('dateNow', dateNow);
      localStorage.setItem('dateUser', dateUser);
      history.push('/contador');
    }
  }

  const invalidDate = () => {
    return (
      <div className="validate-date">Data Inválida</div>
    )
  }

  return (
    <main className="main-container">
      <h1 className="main-titulo">Contador</h1>
      <h4 className="main-subtitulo">Informe uma data</h4>
      <input className="main-input"type="date" onChange={handleChange} placeholder="DD/MM/AAAA"/>
      <button className="main-botao"type="buttom" onClick={hendleSubmit}>Iniciar contagem</button>
      {isInvalidDate && invalidDate()}
    </main>
  )
}

export default Home;
