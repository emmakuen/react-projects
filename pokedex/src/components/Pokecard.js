import React, {Component } from 'react'
const img_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component {
    render() {
        let { size, id, name, type, base_experience } = this.props
        const padded_id = String(id).padStart(3, 0)
        const emojis = {
            fire: "🔥",
            normal: "🪁",
            water: "💧",
            grass: "🌿",
            electric: "⚡",
            ground: "🕳️",
            poison: "☠️",
            psychic: "",
            ghost: "👻",
            steel: "🦾",
            fairy: "🧚",
            dark: "⬛",
            rock: "🪨",
            bug: "🐛",
            ice: "❄️", 
            flying: "🦅"
        }
        

        return (
            <div className={`Pokecard ${size}`}>
                <img className="Pokecard-img" src={`${img_url}${padded_id}.png`} alt={name}/>
                <h3>{name}</h3>
                <div className="specs-container">
                    <div className="spec type-spec">
                        <span>{emojis[type]}</span>
                        <p>{type.toUpperCase()}</p>
                    </div>
                    <div className="spec experience-spec">
                        <span>{base_experience}</span>
                        <p>EXP.</p>
                    </div>
                </div>
                
            </div>
        )
    }
} 

export default Pokecard