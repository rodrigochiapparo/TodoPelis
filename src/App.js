import './App.css';
import { GetDatos } from "./components/GetDatos";
import { InfoPelicula } from "./components/InfoPelicula";
import { Routes, Route } from "react-router-dom";
import React,{useState} from 'react';
import Pelicula from './components/Pelicula';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Button } from 'react-bootstrap';








function App() {

  const [pelicula,setPeli] = useState({});
  function mostrarPelicula(){
    consultarAPI()
  }

  const consultarAPI = async() =>{

    let id = Math.floor(Math.random()*(1000000,1005000)+1005000)

    try {
      
      const idFinal = "tt"+id
      

      const api =  await fetch(`http://www.omdbapi.com/?apikey=efc732b9&i=${idFinal}`);
      const pelicula = await api.json();  
      setPeli(pelicula);
    } catch (error){
      console.log(error);
    }
  }
//

  return (
    <div className="App">


      <Header/>

      <Button variant="light"
        onClick={mostrarPelicula}
      >Traer Pelicula aleatoria</Button>
      <Pelicula
      pelicula={pelicula}
      />
      
      <Routes>
      <Route path="/" element={<GetDatos/>} />
      <Route path="/:id" element={<InfoPelicula/>} />
      </Routes>
    </div>
  );
}

export default App;