import React, {useState, useEffect} from 'react';
import Loading from '../../common/Loading';
import Personaje from '../Personaje/Personaje';
import Info from '../Personajes/Info';
import ErrorRender from '../../common/ErrorRender';

const Personajes = () => {

    // url de la api rick&morty
    const baseUrl = `https://rickandmortyapi.com/api`;

    // estados del componente
    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState({});
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);
    const [endPoint, setEndPoint] = useState('');

    // Refs
    const inputSearch = React.createRef();

    // use effect
    useEffect(() => {
        fetch(`${baseUrl}/character/${endPoint}`)
        .then((response) => {
            if (response.ok) {
              return response.json();              
            } else {
              throw new Error('Busqueda no encontrada error: 404');
            }
          })
        .then( ( {results, info } ) => {
            setError(false);
            setPersonajes(results);
            setInfo(info);
            setFetching(false);
        })
        .catch( error => {
            console.log(error);
            setError(true);
        })
        
    },[endPoint]);

    const handlerButton = () => {
        let name = inputSearch.current.value;
        {name === '' ? setEndPoint('') : setEndPoint(`?name=${name}`) }        
    }
    
    return (  
        <>            
            <div key="list" className="container">
                <h1 className="text-center text-info">
                    Personajes
                </h1>
                <div className="text-center">
                    <input 
                        ref={inputSearch}
                        type="text" 
                        placeholder="Buscar por nombre..." 
                        className="form-control form-control-lg w-50 d-inline-block"
                    />
                    <button                         
                        type="button" 
                        className="btn btn-primary d-inline-block"
                        onClick={handlerButton}
                        >
                        Buscar
                    </button>
                </div>
                

                {/* función if => resultado */}
                {fetching && <Loading/>}
                <Info {...info}/>
                
                {error ? <ErrorRender/> :
                
                    <div className="row">
                        {/* recorremos la lista de personajes */}
                        {personajes.map( (personaje) => (
                            <Personaje key={personaje.id} {...personaje}/>
                        ))}                    
                    </div> 
                
                }        
            </div>  
        </> 
    );
}
 
export default Personajes;