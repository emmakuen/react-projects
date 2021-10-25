import React, { Component } from "react"
import Pokedex from "./components/Pokedex"
import GameButton from "./components/GameButton"
import "./App.css"
import Pokegame from "./components/Pokegame";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameOn: false,
        };
    }

    startGame = () => {
        this.setState({ gameOn: true })
    }

    stopGame = () => {
        this.setState({ gameOn: false })
    }
    
    render() {
        const data = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]

        return (
            <div>
                <h1 className="title">Pokedex</h1>
                {!this.state.gameOn && <Pokedex data={data} size=""/>}
                {this.state.gameOn && <Pokegame data={data} />}
                <GameButton onClick={this.startGame} buttonName="play"/>
                <GameButton onClick={this.stopGame} buttonName="home"/>
            </div>
        )
    }
}

export default App