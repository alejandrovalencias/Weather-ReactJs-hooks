import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (ciudad === "") return;

    consultarApi();
  }, [ciudad, pais]);

  const datosConsulta = (datos) => {
    if (datos.ciudad === "" || datos.pais === "") {
      setError(true);
      return;
    }
    //Se agregan al state
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    setError(false);
  };

  const consultarApi = async () => {
    const appId = `5050e931fb63ed263c67e1293bceeb49`;
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    //Se consume la api del clima
    const respuesta = await fetch(urlApi);
    const resultado = await respuesta.json();
    setResultado(resultado);
  };

  //Cargar un componente condicionalmente
  let componente = null;
  if (error === true) {
    componente = <Error mensaje="Debe seleccionar ciudad y país" />;
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="Ciudad no encontrada" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div className="App">
      <Header titulo="Weather in ReactJs" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 md6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 md6">{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
