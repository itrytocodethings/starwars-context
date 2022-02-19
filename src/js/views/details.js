import React from 'react';
import { useLocation } from 'react-router-dom';

export const Details = (props) => {
  //alternativley could have used props.location.state etc
  const location = useLocation().state;
  let current = location.character ? location.character : location.planet;
  let currentInfo = [];
  for (let key in current) {
    let formatKey = key.split('');
    formatKey[0] = formatKey[0].toUpperCase();
    currentInfo.push([`${formatKey.join('')}`, `${current[key]}`]);
  }
  console.log(currentInfo);
  return (
    <div className="container">
      <div className="card mb-3 mx-auto bg-dark">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={location.imgURL} className="fit" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{current.name}</h5>
              {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
              <ul className="d-flex flex-column">
                {currentInfo.map((entity) => {
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