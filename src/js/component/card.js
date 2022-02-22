import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Card = ({ cardData }) => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            {cardData ? (<div className="card bg-dark mb-3" style={{ width: '25rem' }}>
                <img className="card-img-top" src={cardData.imgURL} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{cardData.name}</h5>
                    <ul className="p-0 mb-3">
                        <li>{cardData.prop1} {cardData.value1}</li>
                        <li>{cardData.prop2} {cardData.value2}</li>
                        <li>{cardData.prop3} {cardData.value3}</li>
                    </ul>
                    <div className="d-flex justify-content-between">
                        <Link
                            to={{
                                pathname: `details/${cardData.name}`,
                                state: cardData,
                            }}
                        ><button className="btn btn-custom">Learn More</button></Link>
                        <button className="btn btn-custom" onClick={() => actions.addFavorite(cardData)}><i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </div>) : <h5>loading...</h5>}
        </div>

    )
}