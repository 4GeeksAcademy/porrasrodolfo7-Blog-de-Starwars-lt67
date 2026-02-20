import React from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

const CardPlaneta = (props) => {

    const { store, dispatch } = useGlobalReducer();

    const addFavorites = () => {
        dispatch({
            type: "add_favoritesPlanets",
            payload: props.planeta.name
        })
    }
    return (

        <div className="card h-100 shadow" style={{ width: "18rem" }}>
            <img src={rigoImageUrl} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.planeta.name}</h5>
                <p className="card-text">
                    <ul>
                        <li>Population: {props.planeta.population}</li>
                        <li>Terrain: {props.planeta.terrain}</li>
                    </ul>
                </p>
                <div className="d-flex justify-content-between mt-auto">
                    <Link
                        to={"/planeta/" + props.uid} className="btn btn-primary">Learn More!
                    </Link>
                    <button
                        onClick={addFavorites}
                        className="btn btn-outline-warning">
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPlaneta
