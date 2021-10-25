import React, { Component } from 'react'

class Coin extends Component {
    render() {
        const imgSources = ["heads", "tails"]
        const face = imgSources[this.props.face]
        return (
            <div className="Coin">
                <img src={`${face}.jpg`} alt={face} />
            </div>
        )
    }
}

export default Coin