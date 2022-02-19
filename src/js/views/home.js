import { array } from "prop-types";
import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		getEntity('https://swapi.dev/api/people', setCharacters, 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg')
		getEntity('https://swapi.dev/api/planets', setPlanets, 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg')
	}, [])

	const getEntity = (url, setter, img) => {
		fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error('help');
			}
			return response.json();
		})
		.then(response => {
			response.results.forEach(entity => entity.imgURL = img)
			setter(response.results)

		})
		.catch(e => {
			console.log(e);
		})
	}

	return (
		<div className="container">
		  <div className="characters mt-5">
			<h2 className="">Characters</h2>
			<ul className="cards characters-cards d-flex flex-nowrap p-0">
				
				{/* <li><Card name="Wayne"/></li> */}
				{characters.map((character, i) => {
					return <li id={i} key={i} className="home"><Card cardData={{
						name: character.name,
						imgURL: 'https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg',
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
				{planets.map((planet, i) => {
					return <li id={i} key={i} className="home"><Card cardData={{
						name: planet.name,
						imgURL: 'https://wallpaperaccess.com/full/1251069.jpg',
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
		</div>
	  );
}
