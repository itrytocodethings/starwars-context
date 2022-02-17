import React from 'react';

export const Details = (props) => {
  let current = props.location.state.character ? props.location.state.character : props.location.state.planet;
  let currentInfo = [];
  for (let key in current) {
    currentInfo.push(`${key}: ${current[key]}`);
  }
  console.log(currentInfo);
  return (
    <div className="container">
      <div className="card mb-3 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.location.state.imgURL} className="fit" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{current.name}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <ul className="d-flex flex-column">
                {currentInfo.map((entity) => {
                  return <li>{entity}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}