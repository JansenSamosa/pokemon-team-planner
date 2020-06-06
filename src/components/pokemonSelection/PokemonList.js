import React, { Component } from 'react'
import { FixedSizeList as List} from 'react-window'
import LazyLoad from 'react-lazyload'

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
                    <LazyLoad>
                        <Pokemon pokemon={pokemon} key={`pokemon-${pokemon.num}`}/>
                    </LazyLoad>
                ))}
            </div>
        )
    }
}

export default PokemonList
/* */

                /*<List
                    className='list'
                    height={1000}
                    itemCount={pokemonList.length}
                    itemSize={window.innerHeight/5}
                    width={1000}
                >
                    {({index, style}) => <Pokemon pokemon={pokemonList[index]} style={style}key={`pokemon-${pokemonList[index].num}`}/>}
                </List>*/