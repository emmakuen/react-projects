import React, { Component } from 'react'

class GameButton extends Component {
    render() {
        const props = this.props
        return (
            <button className={`btn ${props.buttonName}`} onClick={props.onClick}>
                <svg width="100px" height="40px" viewBox="0 0 100 40" className="border">
                <polyline points="99,1 99,39 1,39 1,1 99,1" className="bg-line" />
                <polyline points="99,1 99,39 1,39 1,1 99,1" className="hl-line" />
        </svg>
        <span>{props.buttonName}</span>
            </button>
        )
    }
}

export default GameButton