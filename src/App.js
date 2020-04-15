import React,{useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';


function App() {

    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');
    const [error, setError] = useState(false);

    const datosConsulta = (datos) => {
        if(datos.ciudad === '' || datos.pais === ''){
            //Error
            setError(true);
            return;
        }
        //Se agregan al state
        setCiudad(datos.ciudad);
        setPais(datos.pais);
        setError(false);
    }
    
    //Cargar un componente condicionalmente
    let componente = null;
    if(error === true){
        componente = <Error mensaje="Debe seleccionar ciudad y país"/>;        
    }

    return(
        <div className="App">
            <Header titulo="Clima react"/>

            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col s12 md6">
                            <Formulario
                            datosConsulta={datosConsulta}
                            />
                        </div>
                        <div className="col s12 md6">
                          {componente}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;