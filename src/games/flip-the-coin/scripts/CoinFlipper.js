import React, {Component} from "react";
import Coin from "./Coin";
import {choice} from "./helpers";
import heads from "../media/heads.png";
import tails from "../media/tails.png";
import "../styles/CoinFlipper.css";

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: heads},
            {side: "tails", imgSrc: tails}
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        });
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <div className='CoinFlipper'>
                <h2>Let's Flip A Coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button className="CoinFlipper-playButton" onClick={this.handleClick}>Flip Me!</button>
                <p className="CoinFlipper-gameState">
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
                    heads and {this.state.nTails} tails.
                </p>
            </div>
        );
    }
}

export default CoinFlipper
