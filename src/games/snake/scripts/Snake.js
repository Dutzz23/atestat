import React, {Component} from 'react';
import {Food} from "./Food";
import {SnakeObject} from './SankeObject';
import '../styles/Snake.css';

class Snake extends Component {

    constructor(props) {
        super(props);
        this.state = {
            food: this.getRandomCoordinates(),
            speed: 250,
            direction: 'RIGHT',
            snakeDots: [
                [0, 0],
                [5, 0]
            ]
        }
        this.interval = 0;
        this.getRandomCoordinates = this.getRandomCoordinates.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.checkIfCollapsed = this.checkIfCollapsed.bind(this);
        this.checkIfEat = this.checkIfEat.bind(this);
        this.moveSnake = this.moveSnake.bind(this);
        this.enlargeSnake = this.enlargeSnake.bind(this);
        this.onGameOver = this.onGameOver.bind(this);
        this.checkFoodCoordinates = this.checkFoodCoordinates.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.onkeydown = this.handleKeyDown;
    }

    componentDidUpdate() {
        this.checkIfCollapsed();
        this.checkIfEat();
        this.checkIfOutOfBorders();
    }

    getRandomCoordinates() {
        let x = Math.floor((Math.random() * 9)) * 5;
        let y = Math.floor((Math.random() * 9)) * 5;
        return [x, y];
    }

    handleKeyDown(e) {
        switch (e.keyCode) {
            case 38:
                this.setState(() => {
                    return {
                        direction: 'UP'
                    }
                });
                break;
            case 40:
                this.setState(() => {
                    return {
                        direction: 'DOWN'
                    }
                });
                break;
            case 37:
                this.setState(() => {
                    return {
                        direction: 'LEFT'
                    }
                });
                break;
            case 39:
                this.setState(() => {
                    return {
                        direction: 'RIGHT'
                    }
                });
                break;
            default:
                this.setState((st) => {
                    return {direction: st.direction}
                })
        }
    }

    moveSnake() {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        switch (this.state.direction) {
            case 'RIGHT':
                head = [head[0] + 5, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 5, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 5];
                break;
            case 'UP':
                head = [head[0], head[1] - 5];
                break;
        }
        dots.push(head);
        dots.shift();
        this.setState(() => {
            return {
                snakeDots: dots
            }
        })
    }

    checkIfOutOfBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            this.onGameOver();
        }
    }

    checkIfCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                this.onGameOver();
            }
        })
    }

    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] === food[0] && head[1] === food[1]) {
            this.setState({
                food: this.checkFoodCoordinates()
            })
            this.enlargeSnake();
            this.increaseSpeed();
        }
    }

    checkFoodCoordinates() {
        let canBePlaced = false;
        while (!canBePlaced) {
            canBePlaced = true;
            let coordinates = this.getRandomCoordinates();
            let snake = [...this.state.snakeDots];
            snake.forEach(dot => {
                if (coordinates[0] === dot[0] && coordinates[1] === dot[1]) {
                    canBePlaced = false;
                }
            })
            if (canBePlaced)
                return coordinates;
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        this.setState({
            snakeDots: newSnake
        })
    }


    increaseSpeed() {
        if (this.state.speed > 20) {
            clearInterval(this.interval);
            this.setState({
                speed: this.state.speed - 5
            })
            this.interval = setInterval(this.moveSnake, this.state.speed);
        }
    }

    onGameOver(e) {
        alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
        clearInterval(this.interval);
        this.setState({
            food: this.getRandomCoordinates(),
            speed: 250,
            direction: 'RIGHT',
            snakeDots: [
                [0, 0],
                [5, 0]
            ]
        })
    }

    handleClick() {
        this.interval = setInterval(this.moveSnake, this.state.speed);
    }


    render() {
        return (
            <div className="Snake">
                <div className="Snake-game">

                    <SnakeObject snakeDots={this.state.snakeDots} direction={this.state.direction}/>
                    <Food dot={this.state.food}/>
                    <button className="Snake-playButton" onClick={this.handleClick}>Play</button>
                </div>
            </div>
        );
    }
}

export default Snake;