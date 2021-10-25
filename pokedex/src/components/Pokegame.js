import React, {Component} from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
    render() {
        const data = this.props.data
        const shuffledData = shuffle(data).slice(0, 8)
        const calcScore = (data, sliceStart, sliceEnd) => {
            let totalScore = 0
            data.slice(sliceStart, sliceEnd).forEach(pokemon => {
                totalScore = totalScore + Number(pokemon.base_experience)
            })
            return totalScore
        }


        const score1 = calcScore(shuffledData, 0, 4)
        const score2 = calcScore(shuffledData, 4, 8)
        console.log(score1, score2)
        let winner = ""
        let highlighter = ""
        if (score1 > score2) {
            highlighter = "player1"
            winner = "Player one wins!"
        } else if (score2 > score1) {
            highlighter = "player2"
            winner = "Player two wins!"
        } else {
            winner = "Draw!"
        }


        return (
            <div>
                <p className="score">Player 1: {score1}</p>
                <Pokedex data={shuffledData.slice(0, 4)} size="small" highlighter={highlighter==="player1" ? "winner" : ""}/>
                <p className="result">{winner}</p>
                <Pokedex data={shuffledData.slice(4, 8)} size="small" highlighter={highlighter==="player2" ? "winner" : ""}/>
                <p className="score">Player 2: {score2}</p>
            </div>
        )
    }
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  


export default Pokegame