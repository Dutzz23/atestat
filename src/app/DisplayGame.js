import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class DisplayGame extends Component {
    static defaultProps = {
        game: ''
    };

    render() {
        return (
            <Container>
                {this.props.game}
            </Container>
        );
    }
}

export default DisplayGame;