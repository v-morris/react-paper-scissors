import React, { Component } from 'react';
import Score from './Score.js';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                player: null,
                computer: null
            }
    }

    render() {
        let player = this.props.player;
        let computer = this.props.computer;
        
        return (
            <div>
                <span>{player}</span><br/>
                <span>{computer}</span>
                <Score player={player} computer={computer}/>
            </div>
        )
    }
}

export default Results;