import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ character, planet }) => {
    let imgURL = character ? 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg' : 'https://wallpaperaccess.com/full/1251069.jpg'
    return (
        <div className="card bg-dark mb-1" style={{ width: '25rem' }}>
            <img className="card-img-top" src={imgURL} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{character ? character.name : planet.name}</h5>
                <div>
                    <p>{character ? `Hair Color: ${character.hair_color}` : `Population: ${planet.population}`}</p>
                    <p>{character ? `Eye Color: ${character.eye_color}` : `Terrain: ${planet.terrain}`}</p>
                </div>
                <Link
                    to={{
                        pathname: `details/${character ? character.name : planet.name}`,
                        state: character ? { character: character, imgURL: imgURL } : { planet: planet, imgURL: imgURL },
                    }}
                ><button className="btn btn-custom">Learn More</button></Link>
            </div>
        </div>
    )
}