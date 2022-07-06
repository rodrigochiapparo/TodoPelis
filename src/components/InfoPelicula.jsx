import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import '././infoPelicula.css';


export const InfoPelicula = () => {
    //buscamos el id para dar la informacion
    const { id } = useParams();
    
    const [detallePeli, setDetalle] = useState({})
    const datos= () =>{
   
        fetch(`http://www.omdbapi.com/?apikey=67a6157f&i=${id}`)
        .then(response => response.json())
        .then(data => {
            //Guardo la info aca 
            setDetalle(data)
            })
    }
    //Uso este hook para que datos se active solamente cuando lo estan llamando 
    useEffect(() => {
        datos()
    },[]);
    const {Actors,Country,Title,Poster,Director,Plot,Runtime}= detallePeli
    return (
        <div className='prueba'>
        <div>
            <div className="hero">
            <div className="hero-body">
            <p className="title">
             {Title}({Runtime})
            </p>
            <p className="subtitle">
                Director: {Director}
            </p>
            </div>
            </div>
        </div>
        <div>
            <img src={Poster}/>
        </div>
        <p className="title is-1 is-spaced">Pais: {Country}</p>
        <p className="title is-1 is-spaced">{Actors}</p>
        
        <div className="content is-normal">
            {Plot}
        </div>
        </div>
        
    )
}

export default InfoPelicula;