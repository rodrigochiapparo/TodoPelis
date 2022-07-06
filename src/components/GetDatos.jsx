import React,{ useState} from 'react'
import VistaPelicula from './VistaPelicula'
import './formulario.css';
import { Button } from 'react-bootstrap';




export const GetDatos = () => {
    const [pelis, setPelis] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [anio, setBusquedaAnio] = useState("")
    
    
    
    const datos = e =>{
    
        console.log(busqueda,'busqueda')
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=efc732b9&s=${busqueda}&y=${anio}`)
        .then(response => response.json())
        .then(data => {
            const {Search} = data
            setPelis(Search)
            
            })
            
        
    }
   
    const cambiarState = e =>{
        console.log(e,'et')
        setBusqueda(e.target.value)
    }

    const cambiarAnio = e =>{
        console.log(e,'et')
        setBusquedaAnio(e.target.value)
    }
    
    console.log(pelis,'pelis');
    return (
        <div id='formulario'>
        
            <form className="form-input" onSubmit={datos}>
                <input size={50} className="mb-3" type="text" placeholder="Nombre" onChange={cambiarState} />
                <input type="text" placeholder="Año" onChange={cambiarAnio} />
                <Button variant='danger' type="submit">Buscar</Button>
            </form>
            <div className="resultados">
                {pelis == undefined || pelis.length === 0 ? 
                <p id='noExiste'>No existe esa pelicula</p>
                : pelis.map( peli =>{
                    return( 
                    <VistaPelicula key={peli.imdbID} id={peli.imdbID} nombre={peli.Title} anio={peli.Year} imagen={peli.Poster} />
                )})}
            </div>
        </div>
    )
}

export default GetDatos;
