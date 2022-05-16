import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../style/contador.css'

function Contador() {
  const [totalTimeSeconds, setTotalTimeSeconds] = useState('');
  const history = useHistory();

  const dias = Math.floor(totalTimeSeconds / 86400);
  const horas =  Math.floor((totalTimeSeconds % 86400) / 3600);
  const minutos = Math.floor(((totalTimeSeconds % 86400) % 3600) / 60);
  const segundos = totalTimeSeconds % 60;

  const handleRestart = () => {
    localStorage.clear();
    history.push('/');
  };

  function difference(date1, date2) {  
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes(), date1.getSeconds());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getMinutes(), date2.getSeconds());
    return(date2utc - date1utc);
  };

  useEffect(() => {
    setTimeout(() => {
      if (totalTimeSeconds === 0) {
        alert("O tempo acabou !!");
      } else if (totalTimeSeconds > 0) {
          setTotalTimeSeconds(totalTimeSeconds - 1);
      }
    }, 1000)
  }, [totalTimeSeconds]);

  useEffect(() => {
    const dateNow = new Date(localStorage.getItem("dateNow"));
    const dateUser = new Date(localStorage.getItem("dateUser"));
    const timeDifference = difference(dateNow,dateUser) / 1000;
    setTotalTimeSeconds(timeDifference);
  }, []);

  return (
    <main className="contador-main">
      <div className="contador-header">
        <h1 className="contador-titulo">Contador</h1>
        <button className="contador-botao" onClick={handleRestart}>Reiniciar</button>
      </div>
      <h2>Faltam</h2>
      <div className="container-numbers">
      <div className="item">
          <p>{dias.toString().padStart(2, "0")}</p>
          <h3>Dias</h3>
        </div>
        <div className="item">
          <p>{horas.toString().padStart(2, "0")}</p>
          <h3>Horas</h3>
        </div>
        <div className="item">
          <p>{minutos.toString().padStart(2, "0")}</p>
          <h3>Minutos</h3>
        </div>
        <div className="item">
          <p>{segundos.toString().padStart(2, "0")}</p>
          <h3>Segundos</h3>
        </div>
      </div>
    </main>
  )
}

export default Contador;
