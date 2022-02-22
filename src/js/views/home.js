import { array } from "prop-types";
import React, {useState, useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{(store.characters && store.planets) ? (<div className="container">
		  <div className="characters mt-5">
			<h2 className="">Characters</h2>
			<ul className="cards characters-cards d-flex flex-nowrap p-0">
				
				{/* <li><Card name="Wayne"/></li> */}
				{store.characters.map((character, i) => {
					return <li id={i} key={i} className="home"><Card cardData={{
						name: character.name,
						imgURL: character.imgURL,
						prop1: `Hair Color`,
						prop2: `Eye Color`,
						prop3: `Gender`,
						value1: character.hair_color,
						value2: character.eye_color,
						value3: character.gender,
						entity: character
					}}/></li>
				})}
			</ul>
		  </div>
		  <div className="characters mt-5">
			<h2 className="">Planets</h2>
			<ul className="cards characters-cards d-flex flex-nowrap p-0">
				{/* <li><Card name="Wayne"/></li> */}
				{store.planets.map((planet, i) => {
					return <li id={i} key={i} className="home"><Card cardData={{
						name: planet.name,
						imgURL: planet.imgURL,
						prop1: `Population`,
						prop2: `Terrain`,
						prop3: `Climate`,
						value1: planet.population,
						value2: planet.terrain,
						value3: planet.climate,
						entity: planet
					}}/></li>
				})}
			</ul>
		  </div>
		</div>): <h1>loading...</h1>}
		</div>
	  );
}
