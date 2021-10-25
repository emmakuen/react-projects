import React, {Component} from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {
    render() {
        
        const data = this.props.data
        const size = this.props.size
        const highlighter = this.props.highlighter
        
        return (
            
            <div>
                <div className={`container ${highlighter}`}>
                    {data.map((pokemon) => 
                        <Pokecard 
                            size={size}
                            key={pokemon.id}
                            id={pokemon.id} 
                            name={pokemon.name}
                            type={pokemon.type}
                            base_experience={pokemon.base_experience}
                        />)}
                </div>
            </div>

        )
    }
}

export default Pokedex