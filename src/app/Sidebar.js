import React, {Component} from 'react';
import "../styles/Sidebar.css";
import {Route, Routes} from "react-router-dom";

class Sidebar extends Component {


    render() {
        return (
            <div className="Sidebar">
                <Routes>
                    <Route path='/' element={
                        <React.Fragment>
                            <h2 className="Sidebar-Title">Home</h2>
                            <p className="Sidebar-Text">
                                Here is GAME ZONE, the place where you can have fun on the internet without worries.
                                <br/>
                                <br/>We have
                                prepared some games so that you do not get bored while waiting somewhere or you want to
                                waste
                                your time having fun.
                            </p>
                        </React.Fragment>}/>
                    <Route path='/games/hangman' element={
                        <React.Fragment>
                            <h2 className="Sidebar-Title">Hangman</h2>
                            <p className="Sidebar-Text">
                                The object of the game is to guess the word. This word has as many letters as the
                                underscores you see.
                                <br/>
                                <br/>
                                To play this game you have to click on the letter you want to try. If the letter is not
                                found in the word you are trying to guess, the hanger will be outlined more and more.
                            </p>
                        </React.Fragment>
                    }/>
                    <Route path='/games/lights%20Out' element={
                        <React.Fragment>
                            <h2 className="Sidebar-Title">Light Out</h2>
                            <p className="Sidebar-Text">
                                The object of the game is to light all the squares on the game board.
                                <br/>
                                <br/>
                                To play this game you have to click on the square you want to turn on or off. Be
                                careful! The adjacent squares will light up if they are off, and vice versa.
                            </p>
                        </React.Fragment>
                    }/>
                    <Route path='/games/coin%20Flipper' element={
                        <React.Fragment>
                            <h2 className="Sidebar-Title">Coin Flipper</h2>
                            <p className="Sidebar-Text">
                                The object of the game is to guess the word. This word has as many letters as the
                                underscores you see.
                                <br/>
                                <br/>
                                To play this game you have to click on the letter you want to try. If the letter is not
                                found in the word you are trying to guess, the hanger will be outlined more and more.
                            </p>
                        </React.Fragment>
                    }/>
                    <Route path='/games/roll%20The%20Dice' element={
                        <React.Fragment>
                            <h2 className="Sidebar-Title">Roll the Dice</h2>
                            <p className="Sidebar-Text">
                                Try your luck! Find the pair and see how well you can do today!
                                <br/>
                                <br/>
                                You can use this game for a board game and you need dice.
                            </p>
                        </React.Fragment>
                    }/>
                    <Route path='/games' element={
                        <React.Fragment>
                            <h2 className="Sidebar-Title">Games</h2>
                            <p className="Sidebar-Text">
                                Here you can see which games we offer especially for you!
                            </p>
                        </React.Fragment>
                    }/> <Route path='/games/snake' element={
                    <React.Fragment>
                        <h2 className="Sidebar-Title">Snake</h2>
                        <p className="Sidebar-Text">
                            A game so classic that it catches you just like in its glory days.
                            <br/>It could not be missing from our app!
                            <br/>
                            <br/>
                            Use <i className="fa-solid fa-arrow-down">
                        </i>, <i className="fa-solid fa-arrow-up">
                        </i>, <i className="fa-solid fa-arrow-left">
                        </i> and <i className="fa-solid fa-arrow-right">
                        </i> to play.
                            <br/>
                            <br/>
                            Be careful! the snake will increase its speed every time it eats.
                        </p>
                    </React.Fragment>
                }/>
                </Routes>
            </div>
        );
    }
}

export default Sidebar;