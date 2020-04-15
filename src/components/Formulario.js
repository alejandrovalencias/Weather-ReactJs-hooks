import React,{useState} from 'react';

const Formulario = ({datosConsulta}) => {
    //State del componente
    //busqueda = state guardarBusqueda = this.setState({})
    const [busqueda, setBusqueda] = useState({ciudad:'',pais:''});

    const handleChange = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

        console.log(busqueda);
    }

    const consultaClima = e =>{
        e.preventDefault();

        //Pasar hacia el componente principal la busqueda
        datosConsulta(busqueda);
    }

return(
    <form onSubmit={consultaClima}>
        <div className="input-field col s12">
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad: </label>
        </div>
        
        <div className="input-field col s12">
            <select onChange={handleChange} name="pais">
                <option value="">Seleccione el país</option>
                <option value="CO">Colombia</option>
                <option value="DN">Dinamarca</option>
                <option value="AR">Argentina</option>
                <option value="US">Estados unidos</option>
            </select>
        </div>

        <div className="input-field col s12">
            <input type="submit" className="waves-effect waves-light btn-large btn-block yellow  accent-4" value="Consulta clima"/>
        </div>
    </form>
);
}

export default Formulario;