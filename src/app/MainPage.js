import React, {Component} from 'react';
import Hangman from "../games/hangman/scripts/Hangman";
import {Route, Routes} from "react-router-dom";
import LightsOut from "../games/lights-out/scripts/LightsOut";
import CoinFlipper from "../games/flip-the-coin/scripts/CoinFlipper";
import RollDice from "../games/dice/scripts/RollDice";
import Snake from "../games/snake/scripts/Snake";
import Homepage from "./Homepage";
import Games from "./Games";
import "../styles/MainPage.css"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: <Hangman/>
        }
    }

    render() {
        return (
            <div className="MainPage">
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/games' element={<Games />} />
                    <Route path='/games/hangman' element={<Hangman/>}/>
                    <Route path='/games/lights%20Out' element={<LightsOut/>}/>
                    <Route path='/games/coin%20Flipper' element={<CoinFlipper/>}/>
                    <Route path='/games/roll%20The%20Dice' element={<RollDice/>}/>
                    <Route path='/games/snake' element={<Snake/>}/>
                </Routes>
            </div>
        );
    }
}

export default MainPage;
    