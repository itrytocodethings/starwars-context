import React from 'react';

export const Card = (props) => {

    return (
    <div className="card" style={{width: '25rem'}}>
    <img className="card-img-top" src="https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg" alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
            <p>Hair Color: {props.hairColor}</p>
            <p>Eye Color: {props.eyeColor}</p>
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    )
}