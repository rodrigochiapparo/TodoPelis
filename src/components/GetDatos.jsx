import React,{ useState} from 'react'
import VistaPelicula from './VistaPelicula'
import './formulario.css';
import { Button } from 'react-bootstrap';




export const GetDatos = () => {
    //Guardar lista de pelis que aparecen
    const [pelis, setPelis] = useState([])
    //Lo que se busca en la api 
    const [busqueda, setBusqueda] = useState("")
    const [anio, setBusquedaAnio] = useState("")
    
    
    //Buscamos en la api  y con la data (objeto)
    const datos = e =>{
    
        console.log(busqueda,'busqueda')
        // Con esto no recarga la pagina
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=efc732b9&s=${busqueda}&y=${anio}`)
        .then(response => response.json())
        .then(data => {
            //El search es un array de peliculas que se encontraron
            const {Search} = data
            setPelis(Search)
            
            })
            
        
    }
   //cuando se genra un cambio se cambia el state de busqueda
    const cambiarState = e =>{
        console.log(e,'et')
        setBusqueda(e.target.value)
    }
   //cuando se genra un cambio se cambia el state de anio
    const cambiarAnio = e =>{
        console.log(e,'et')
        setBusquedaAnio(e.target.value)
    }
    
    console.log(pelis,'pelis');
    return (
        <div id='formulario'>
            <h3>Buscá tu peli</h3>
            <form className="form-input" onSubmit={datos}>
                <input size={50} className="mb-3" type="text" placeholder="Nombre" onChange={cambiarState} />
                <input type="text" placeholder="Año" onChange={cambiarAnio} />
                <Button variant='danger' type="submit">Buscar</Button>
            </form>
            <div className="resultados">
                {pelis == undefined ? 
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
