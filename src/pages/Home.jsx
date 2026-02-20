import background from "../assets/img/backgroundmain.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardNave from "./CardNave.jsx";
import CardPlaneta from "./CardPlaneta.jsx";
import CardPersonaje from "./CardPersonaje.jsx";
import { useEffect, useState } from "react"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [starships, setStarships] = useState([])
	const [planet, setPlanet] = useState([])
	const [character, setCharacter] = useState([])

	let navesQuemadas = [
		{
			"uid": "2",
			"name": "CR90 corvette",
			"url": "https://www.swapi.tech/api/starships/2"
		},
		{
			"uid": "3",
			"name": "Star Destroyer",
			"url": "https://www.swapi.tech/api/starships/3"
		}
	]

	useEffect(() => {
		console.log("estoy listo")
		fetch("https://swapi.dev/api/starships/")
			.then((response) => response.json())
			.then((data) => setStarships(data.results))

		fetch("https://swapi.dev/api/planets/")
			.then((response) => response.json())
			.then((data) => setPlanet(data.results))

		fetch("https://swapi.dev/api//people")
			.then((response) => response.json())
			.then((data) => setCharacter(data.results))

	}, [])

	return (

		<div className="m-5 text-white ">
			<h1 className="mb-5 title-depth title-glow title-starwars ">Characters</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{character.map((personaje, index) => (
					<div key={personaje.url} className="me-3" style={{ minWidth: "300px" }}>
						<CardPersonaje uid={personaje.url.replace('https://swapi.dev/api/people/', '').replace('/', '')} personaje={personaje} />
					</div>
				))}
			</div>

			<h1 className="mb-5 mt-4 title-depth title-glow title-starwars">Planets</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{planet.map((planeta, index) => (
					<div key={planeta.url} className="me-3" style={{ minWidth: "300px" }}>
						<CardPlaneta uid={planeta.url.replace('https://swapi.dev/api/planets/', '').replace('/', '')} planeta={planeta} />
					</div>
				))}
			</div>

			<h1 className="mb-5 mt-4 title-depth title-glow title-starwars">Starships</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{starships.map((nave, index) => (
					<div key={nave.url} className="me-3" style={{ minWidth: "300px" }}>
						<CardNave uid={nave.url.replace('https://swapi.dev/api/starships/', '').replace('/', '')} nave={nave}/>
					</div>
				))}
			</div>	

		</div>

	);
}; 