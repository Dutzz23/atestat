import React, {Component} from 'react';
import Board from "./Board";
import "../styles/LightsOut.css"
class LightsOut extends Component {
    render() {
        return (
            <div className="LightsOut">
                <Board/>
            </div>
        );
    }
}

export default LightsOut;