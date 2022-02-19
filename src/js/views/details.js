import React from 'react';
import { useLocation } from 'react-router-dom';

export const Details = (props) => {
  //alternativley could have used props.location.state etc
  const entity = useLocation().state;
  let currentDetails = [];
  for (let key in entity.entity) {
    let formatKey = key.split('');
    formatKey[0] = formatKey[0].toUpperCase();
    currentDetails.push([`${formatKey.join('')}`, `${entity.entity[key]}`]);
  }
  return (
    <div className="container">
      <div className="card mb-3 mx-auto bg-dark">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={entity.imgURL} className="fit" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{entity.name}</h5>
              {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
              <ul className="d-flex flex-column">
                {currentDetails.map((entity) => {
                  return <li><strong>{`${entity[0]}:`} </strong>{`${entity[1]}`}</li>
                })}
                {/* {currentInfo.map((entity) => { 
                  return <li>{entity}</li>
                })} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}