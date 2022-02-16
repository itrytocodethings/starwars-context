import React from 'react';

export const Card = (props) => {
    let currentEntity;
    props.type == 'character' ? currentEntity = {...props.character} : currentEntity = {...props.planet}
    console.log(currentEntity);
    let imgURL = props.character ? 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg' : 'https://wallpaperaccess.com/full/1251069.jpg'
    // console.log(props.character) //question for george, why does props.character.name not work?? why do I have to spread to a new obj????
    return (
    <div className="card" style={{width: '25rem'}}>
    <img className="card-img-top" src={imgURL} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{currentEntity.name}</h5>
        {props.type == "character" ? 
        (        
            <div>
                <p>Hair Color: {currentEntity.hair_color}</p>
                <p>Eye Color: {currentEntity.eye_color}</p>
            </div>
        ) 
        :
        (
            <div>
                <p>Population: {currentEntity.population}</p>
                <p>Terrain: {currentEntity.terrain}</p>
            </div>
        )
        }
        <a href="#" className="btn btn-primary">Learn More</a>
    </div>
    </div>
    )
}