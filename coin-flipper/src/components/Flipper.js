import React, { Component } from 'react'
import Coin from './Coin'

class Flipper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tossResult: undefined,
            headCount: 0,
            tailCount: 0,
            totalCount: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            tossResult: Math.floor(Math.random() * 2)
        })

        if (this.state.tossResult === 0) {
            this.setState((curState) => ({
                headCount: curState.headCount + 1,
                totalCount: curState.totalCount + 1
            }))
        } else {
            this.setState((curState) => ({
                tailCount: curState.tailCount + 1,
                totalCount: curState.totalCount + 1
            }))
        }
    }

    render() {
        return (
            <div className="Flipper">
                <h1>Let's flip a coin!</h1>
                {this.state.tossResult !== undefined && <Coin face={this.state.tossResult} />}
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.totalCount}, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
            </div>
        )
    }
}

export default Flipper