import { Link } from "react-router-dom";
import starwarsImageUrl from "../assets/img/logo-starwars.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light navbar-bg-image px-5">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={starwarsImageUrl} style={{ width: "120px", height: "auto" }} />
					</span>
				</Link>
				<div className="d-flex flex-column gap-2">
					
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle d-flex align-items-center"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>Favorites Characters
							<span className="badge bg-secondary ms-2">
								{store.favoritesPersonajes.length}
							</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary" aria-labelledby="dropdownMenuButton" style={{ minWidth: "200px" }}>
							{store.favoritesPersonajes.length === 0 ? (
								<li className="dropdown-item text-muted text-center">Empty</li>
							) : (
								store.favoritesPersonajes.map((perFavorito, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-light">
										<span className="text-truncate" style={{ maxWidth: "150px" }}>{perFavorito}</span>
										<i
											className="fa fa-trash text-danger ms-2"
											style={{ cursor: "pointer" }}
											onClick={() => dispatch({ type: "delete_favoritePersonajes", payload: perFavorito })}
										></i>
									</li>
								))
							)}
						</ul>
					</div>

					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle d-flex align-items-center"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>Favorites Planets
							<span className="badge bg-secondary ms-2">
								{store.favoritesPlanets.length}
							</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary" aria-labelledby="dropdownMenuButton" style={{ minWidth: "200px" }}>
							{store.favoritesPlanets.length === 0 ? (
								<li className="dropdown-item text-muted text-center">Empty</li>
							) : (
								store.favoritesPlanets.map((planetFavorito, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-light">
										<span className="text-truncate" style={{ maxWidth: "150px" }}>{planetFavorito}</span>
										<i
											className="fa fa-trash text-danger ms-2"
											style={{ cursor: "pointer" }}
											onClick={() => dispatch({ type: "delete_favoritePlanet", payload: planetFavorito })}
										></i>
									</li>
								))
							)}
						</ul>
					</div>

					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle d-flex align-items-center"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>Favorites Starships
							<span className="badge bg-secondary ms-2">
								{store.favoritesNaves.length}
							</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary" aria-labelledby="dropdownMenuButton" style={{ minWidth: "200px" }}>
							{store.favoritesNaves.length === 0 ? (
								<li className="dropdown-item text-muted text-center">Empty</li>
							) : (
								store.favoritesNaves.map((naveFavorita, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-light">
										<span className="text-truncate" style={{ maxWidth: "150px" }}>{naveFavorita}</span>
										<i
											className="fa fa-trash text-danger ms-2"
											style={{ cursor: "pointer" }}
											onClick={() => dispatch({ type: "delete_favoriteNave", payload: naveFavorita })}
										></i>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};