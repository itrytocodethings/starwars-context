import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ cardData }) => {
    return (
        <div className="container">
            {cardData ? (<div className="card bg-dark mb-3" style={{ width: '25rem' }}>
                <img className="card-img-top" src={cardData.imgURL} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{cardData.name}</h5>
                    <ul className="p-0 mb-3">
                        <li>{cardData.prop1} {cardData.value1}</li>
                        <li>{cardData.prop2} {cardData.value2}</li>
                        <li>{cardData.prop3} {cardData.value3}</li>
                    </ul>
                    <Link
                        to={{
                            pathname: `details/${cardData.name}`,
                            state: cardData,
                        }}
                    ><button className="btn btn-custom">Learn More</button></Link>
                </div>
            </div>) : <h5>loading...</h5>}
        </div>

    )
}