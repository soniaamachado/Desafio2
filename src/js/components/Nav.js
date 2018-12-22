import React from "react";
import "../../css/Nav.css";
import { NavLink } from 'react-router-dom'


const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand"><NavLink className='navbar-brand' activeClassName='Selected' to={'/'}>Desafio 2</NavLink></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link"> <NavLink activeClassName='Selected' to={'/app'}>Articles</NavLink></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><NavLink activeClassName='Selected' to={'/users'}>Users</NavLink></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;