import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		getCharacters();
		getPlanets();
	}, [])

	const getCharacters = () => {
		fetch('https://swapi.dev/api/people')
		.then(response => {
			if (!response.ok) {
				throw new Error('help');
			}
			return response.json();
		})
		.then(response => {
			// console.log(response.results);
			setCharacters(response.results)

		})
		.catch(e => {
			console.log(e);
		})
	}
	const getPlanets = () => {
		fetch('https://swapi.dev/api/planets')
		.then(response => {
			if (!response.ok) {
				throw new Error('help');
			}
			return response.json();
		})
		.then(response => {
			// console.log(response.results);
			setPlanets(response.results)
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
					return <li id={i} key={i} className="home"><Card type="character" character={character}/></li>
				})}
			</ul>
		  </div>
		  <div className="characters mt-5">
			<h2 className="">Planets</h2>
			<ul className="cards characters-cards d-flex flex-nowrap p-0">
				{/* <li><Card name="Wayne"/></li> */}
				{planets.map((planet, i) => {
					return <li id={i} key={i} className="home"><Card type="planet" planet={planet} /></li>
				})}
			</ul>
		  </div>
		</div>
	  );
}
