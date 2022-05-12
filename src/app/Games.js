import React, {Component} from 'react';
import {games} from "./ListOfGames";
import {Container, Row} from "react-bootstrap";
import '../styles/Games.css';
import {Link} from "react-router-dom";

class Games extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Homepage-background">{''}</div>
                <div className="Homepage-background Homepage-background2">{''}</div>
                <div className="Homepage-background Homepage-background3">{''}</div>
                <Container className="Games">
                    <Row className="justify-content-center p-2 p-md-5">
                        {
                            games.map((game) => {
                                return (
                                    <div className='col-12 col-sm-6 col-md-3 mb-2 mb-sm-5'>
                                        <div className="m-1 Games-game">
                                            <Link to={'/games/' + game.name[0].toLowerCase() + game.name.substring(1)}>{game.name}</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Games;