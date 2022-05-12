import React, {Component} from "react";
import {randomWord} from "./words";
import "../styles/Hangman.css";
import img0 from "../media/0.jpg";
import img1 from "../media/1.jpg";
import img2 from "../media/2.jpg";
import img3 from "../media/3.jpg";
import img4 from "../media/4.jpg";
import img5 from "../media/5.jpg";
import img6 from "../media/6.jpg";

class Hangman extends Component {
    static defaultProps = {
        maxNumberOfChances: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };

    constructor(props) {
        super(props);
        this.state = {
            nWrong: 0,
            guessed: new Set(),
            answer: randomWord()
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            nWrong: 0,
            guessed: new Set(),
            answer: randomWord()
        });
    }

    guessedWord() {
        return this.state.answer
            .split("")
            .map(letter => (this.state.guessed.has(letter) ? letter : "_"));
    }

    handleGuess(evt) {
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ));
    }

    render() {
        const gameOver = this.state.nWrong >= this.props.maxNumberOfChances;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        const altText = `${this.state.nWrong}/${this.props.maxNumberOfChances} guesses`;
        let gameState = this.generateButtons();
        if (isWinner) gameState = "You Win!";
        if (gameOver) gameState = "You Lose!";
        return (
            <div className='Hangman'>
                <div>
                    <h1>Hangman</h1>
                    <img src={this.props.images[this.state.nWrong]} alt={altText}/>
                    <p className="Hangman-guessedWrongText">Guessed Wrong: {this.state.nWrong}</p>
                    <p className='Hangman-word'>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    <div className='Hangman-buttons'>{gameState}</div>
                    <button id='reset' onClick={this.reset}>
                        Restart
                    </button>
                </div>
            </div>
        );
    }
}

export default Hangman;
