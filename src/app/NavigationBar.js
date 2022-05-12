import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {games} from "./ListOfGames";
import "../styles/NavigationBar.css";
import logo from "../images/logo.svg";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarToggle: true,
            dropdownToggle: true
        }
        this.dropdownHandleClick = this.dropdownHandleClick.bind(this);
        this.navbarToggle = this.navbarToggle.bind(this);
    }

    dropdownHandleClick() {
        this.setState((st) => {
            return {
                dropdownToggle: !st.dropdownToggle
            }
        })
    }

    navbarToggle() {
        this.setState((st) => {
            return {
                navbarToggle: !st.navbarToggle,
                dropdownToggle: true
            }
        })
    }

    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar-LogoAndAppName">
                    <Link to="">
                        <img className="Navbar-Logo" alt='logo' src={logo}/>
                    </Link>
                    <Link to="" className="Navbar-AppName">
                        <h1 className="Navbar-AppName">GAME ZØNE</h1>
                    </Link>
                    <button onClick={this.navbarToggle} className="Navbar-BurgerButton">
                        <i className="fa-solid fa-circle-chevron-down" style={{'color': 'white'}}>{''}</i>
                    </button>
                </div>
                <div className={`Navbar-Links " ${this.state.navbarToggle ? " Navbar-Toggle" : ''}`}>
                    <Link onClick={this.navbarToggle} className="Navbar-Link" to="/">Home</Link>
                    <div className="Navbar-Dropdown">
                        <button className="Navbar-Link Navbar-DropdownButton" onClick={this.dropdownHandleClick}>Games
                        </button>
                        <ul className={`Navbar-DropdownList ${this.state.dropdownToggle ? 'Navbar-DropdownToggle' : ''}`}>
                            {games.map((game) =>
                                <li className="Navbar-DropdownItem"
                                    key={game.name}>
                                    <Link onClick={this.navbarToggle} className="Navbar-DropdownItemLink"
                                          to={'/games/' + game.name[0].toLowerCase() + game.name.substring(1)}>
                                        {game.name}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <a className="Navbar-Link" href="https://github.com/Dutzz23/atestat">GitHub</a>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
