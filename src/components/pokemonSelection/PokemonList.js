import React, { Component } from 'react'

import Pokemon from './Pokemon'


export class PokemonList extends Component {
    getPokemonList = () => {
        let { search, filter, sort } = this.props.searchOptions
        search = search.toLowerCase().replace(' ', '')

        let pokemonList = this.props.pokemon

        if(search !== '') {
            pokemonList = pokemonList.filter(pokemon => pokemon.name.includes(search))
        }
        if(filter !== 'all') {
            pokemonList = pokemonList.filter(pokemon => {
                const types = pokemon.types
                if(types[0] === filter || types[1] === filter) {
                    return pokemon
                }
            })
        }
        return pokemonList
    }
    render() {
        return (
            <div className='pokemon-list'>
                {this.getPokemonList().map(pokemon => (
                    <Pokemon pokemon={pokemon} key={pokemon.num}/>
                ))}
            </div>
        )
    }
}

export default PokemonList
