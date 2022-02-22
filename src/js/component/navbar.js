import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><i className="fas fa-jedi fa-3x"></i></span>
				</Link>
				<div class="btn-group">
					<button type="button" class="btn btn-custom dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Action
					</button>
					<ul class="dropdown-menu">
						{store.favorites.map((fav, i) => <li key={i} className="dropdown-item">{fav}</li>)}
					</ul>
				</div>
			</div>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
		</nav>
	);
};
