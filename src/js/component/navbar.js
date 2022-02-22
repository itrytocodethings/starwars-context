import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/navbar.css"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><i className="fas fa-jedi fa-3x"></i></span>
				</Link>
				<div class='btn-group position relative'>
					<button type="button" class="btn btn-custom dropdown-toggle" data-bs-toggle='dropdown' data-bs-auto-close="outside" aria-expanded="false">
						<span class={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${store.favorites.length > 0 ? 'd-block' : 'd-none'}`}>
							{store.favorites.length}
							<span class="visually-hidden">unread messages</span>
						</span>
						Favorites
					</button>
					<ul className={`dropdown-menu ${store.favorites.length > 0 ? '' : 'd-none'}`}>
						{store.favorites.map((fav, i) => <li key={i} id={i} className="dropdown-item d-flex justify-content-between align-content-center align-items-center" onClick={e => actions.removeFavorite(e, i)}>{fav}<i class="fas fa-backspace"></i></li>)}
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
