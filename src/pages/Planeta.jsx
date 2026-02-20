// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";


export const Planeta = props => {

  const { store } = useGlobalReducer()
  console.log("planeta")
  console.log(useParams())


  const { planetaId } = useParams()

  const [detallePlaneta, setDetallePlaneta] = useState({})

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + planetaId)
      .then((response) => response.json())
      //.then((data) => setStarships(data.results))
      .then((data) => setDetallePlaneta(data.result.properties))

  }, [])




  return (

    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card mb-3" style={{ maxWidth: "850px", border: "none" }}>
          <div className="row g-0 text-center m-5">
            <div className="col-md-4">
              <img src={rigoImageUrl} className="img-fluid rounded-start" alt="..."
                style={{ width: "100%", height: "250px", objectFit: "cover" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title display-4 ">{detallePlaneta.name} </h2>
                <p className="card-text fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam libero cum consectetur ullam enim rerum aperiam unde distinctio eaque dicta veniam atque, aut perspiciatis? Suscipit eveniet consequatur accusamus tempore beatae?</p>
              </div>
            </div>
            <div className="mt-5 mx-auto my-4" style={{ height: "3px", backgroundColor: "red", width: "90%", margin: "20px 0" }}></div>
            <div className="row justify-content-center m-3">
              <div className="col">
                <p className="fw-bold mb-0">Name:</p>
                <p className="text-bl">{detallePlaneta.name}</p>
              </div>

              <div className="col">
                <p className="fw-bold mb-0">Population:</p>
                <p className="text-bl">{detallePlaneta.population}</p>
              </div>

              <div className="col">
                <p className="fw-bold mb-0">Climate:</p>
                <p className="text-bl">{detallePlaneta.climate}</p>
              </div>

              <div className="col">
                <p className="fw-bold mb-0">Terrain:</p>
                <p className="text-bl">{detallePlaneta.terrain}</p>
              </div>

              <div className="col">
                <p className="fw-bold mb-0">Diameter</p>
                <p className="text-bl">{detallePlaneta.diameter}</p>
              </div>

              <div className="col">
                <p className="fw-bold mb-0">Gravity</p>
                <p className="text-bl">{detallePlaneta.gravity}</p>
              </div>

            </div>
          </div>
        </div>˝
      </div>
      <div className="container text-center">
        <Link to="/">
          <span className="btn btn-primary btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>

    </>
  );
};


Planeta.propTypes = {
  match: PropTypes.object
};