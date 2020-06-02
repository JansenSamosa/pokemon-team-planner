import React, { Component } from 'react'

import Pokemon from './Pokemon'


export class PokemonList extends Component {
    render() {
        return (
            <div className='pokemon-list'>
                {this.props.pokemon.map(pokemon => (
                    <Pokemon pokemon={pokemon} key={pokemon.num}/>
                ))}
            </div>
        )
    }
}

export default PokemonList
