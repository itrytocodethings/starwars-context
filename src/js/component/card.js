import React from 'react';

export const Card = ({type, character, planet}) => {
    let imgURL = character ? 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg' : 'https://wallpaperaccess.com/full/1251069.jpg'
    return (
    <div className="card" style={{width: '25rem'}}>
    <img className="card-img-top" src={imgURL} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{type == 'character' ? character.name : planet.name}</h5>
        {type == "character" ? 
        (        
            <div>
                <p>Hair Color: {character.hair_color}</p>
                <p>Eye Color: {character.eye_color}</p>
            </div>
        ) 
        :
        (
            <div>
                <p>Population: {planet.population}</p>
                <p>Terrain: {planet.terrain}</p>
            </div>
        )
        }
        <a href="#" className="btn btn-primary">Learn More</a>
    </div>
    </div>
    )
}