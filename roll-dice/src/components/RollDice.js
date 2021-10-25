import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false,
            firstIdx: Math.floor(Math.random() * 6),
            secondIdx: Math.floor(Math.random() * 6),
            toAnimate: ""
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        this.setState({
            firstIdx: Math.floor(Math.random() * 6),
            secondIdx: Math.floor(Math.random() * 6),
            isClicked: true, 
            toAnimate: "animate" 
        })
    
        
        setTimeout(() => {
            this.setState({
                isClicked: false, 
                toAnimate: "" 
            })
        }, 1000);
    }

    render() {
        const diceSides = ["one", "two", "three", "four", "five", "six"]
        return (
            <div className="RollDice">
                <div className="dice-container">
                    <Die 
                        animate={this.state.toAnimate} 
                        face={diceSides[this.state.firstIdx]}
                    />
                    <Die 
                        animate={this.state.toAnimate} 
                        face={diceSides[this.state.secondIdx]}
                    />
                </div>
                <button 
                    className={`btn ${this.state.isClicked && "disabled"}`} 
                    disabled={this.state.isClicked} onClick={this.roll}
                >
                    {this.state.isClicked ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice