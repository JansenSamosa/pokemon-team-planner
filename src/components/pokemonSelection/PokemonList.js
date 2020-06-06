import React, { Component } from 'react'

import Pokemon from './Pokemon'


export class PokemonList extends Component {

    getPokemonList = () => {
        let { search, typeFilter, finalEvoFilter, sort } = this.props.searchOptions

        search = search.toLowerCase().replace(' ', '')

        let pokemonList = this.props.pokemon

        if(search !== '') {
            pokemonList = pokemonList.filter(pokemon => pokemon.name.includes(search))
        }
        if(typeFilter !== 'all') {
            pokemonList = pokemonList.filter(pokemon => {
                const types = pokemon.types
                if(types[0] === typeFilter || types[1] === typeFilter) {
                    return pokemon
                }
            })
        }
        if(finalEvoFilter) {
            pokemonList = pokemonList.filter(pokemon => pokemon.isFinalEvo && !pokemon.isBaby)
        }
        return pokemonList
    }
    render() {
        return (
            <div className='pokemon-list'>
                {this.getPokemonList().map(pokemon => (
                    <Pokemon pokemon={pokemon} key={`pokemon-${pokemon.num}`}/>
                ))}
            </div>
        )
    }
}

export default PokemonList
