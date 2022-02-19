import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ cardData }) => {
    return (
        <div className="container">
            {cardData ? (<div className="card bg-dark mb-3" style={{ width: '25rem' }}>
                <img className="card-img-top" src={cardData ? cardData.imgURL : null} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{cardData.name}</h5>
                    <ul className="p-0 mb-3">
                        <li>{cardData ? cardData.prop1 : null} {cardData ? cardData.value1 : null}</li>
                        <li>{cardData ? cardData.prop2 : null} {cardData ? cardData.value2 : null}</li>
                        <li>{cardData ? cardData.prop3 : null} {cardData ? cardData.value3 : null}</li>
                    </ul>
                    <Link
                        to={{
                            pathname: `details/${cardData ? cardData.name : null}`,
                            state: cardData,
                        }}
                    ><button className="btn btn-custom">Learn More</button></Link>
                </div>
            </div>) : <h5>loading...</h5>}
        </div>

    )
}