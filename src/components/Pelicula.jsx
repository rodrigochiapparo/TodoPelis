import React from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pelicula.css';




const Pelicula = ({pelicula}) => {
    return(
        <div id="pelicula">
        <Card className="cardFinal" style={{width: '18rem' }}>
            <Card.Img variant="top" src={pelicula.Poster} />
            <Card.Body className="cardBody">
            <Card.Title>{pelicula.Title}</Card.Title>
            <Card.Text>
                <ul>
                    <li>{pelicula.Country}</li>
                    <li>{pelicula.Actors}</li>
                </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>

    );
}

export default Pelicula;