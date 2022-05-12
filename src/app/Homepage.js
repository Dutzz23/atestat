import React, {Component} from 'react';
import "../styles/Homepage.css";
import {Link} from "react-router-dom";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let button = document.getElementsByClassName('Homepage-Button');
        button.classList.add('Homepage-actionButton');
    }

    render() {
        return (
            <div>
                <div className="Homepage-background">{''}</div>
                <div className="Homepage-background Homepage-background2">{''}</div>
                <div className="Homepage-background Homepage-background3">{''}</div>
                <h1 className="Homepage-Title">HELLO</h1>
                <h2 className="Homepage-Subtitle">Welcome to <strong>GAME ZØNE</strong></h2>
                <Link to='/games' className="Homepage-Button">See our games</Link>
            </div>
        );
    }
}

export default Homepage;