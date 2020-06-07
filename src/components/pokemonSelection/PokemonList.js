import React, { Component } from 'react'
import { FixedSizeList as List} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import Pokemon from './Pokemon'


export class PokemonList extends Component {

    getStatAverage = stats => {
        //gets average of all stats(speed, hp, attack, etc...)
        let avg = (stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5])/6
        return avg
    }
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
        //Sorts the pokemonList depending of value of sort
        switch(sort) {
            case 'stat-average':
                pokemonList = pokemonList.sort((a,b) => this.getStatAverage(b.stats) - this.getStatAverage(a.stats))
                break
            case 'stat-speed':
                pokemonList = pokemonList.sort((a,b) => b.stats[5] - a.stats[5])
                break
            case 'stat-hp':
                pokemonList = pokemonList.sort((a,b) => b.stats[0] - a.stats[0])
                break
            case 'stat-attack':
                pokemonList = pokemonList.sort((a,b) => b.stats[1] - a.stats[1])
                break
            case 'stat-defense':
                pokemonList = pokemonList.sort((a,b) => b.stats[2] - a.stats[2])
                break
            case 'stat-specialattack':
                pokemonList = pokemonList.sort((a,b) => b.stats[3] - a.stats[3])
                break
            case 'stat-specialdefense':
                pokemonList = pokemonList.sort((a,b) => b.stats[4] - a.stats[4])
                break
            default:
                pokemonList = pokemonList.sort((a,b) => a.num - b.num)
                break
        }
        if(finalEvoFilter) {
            pokemonList = pokemonList.filter(pokemon => pokemon.isFinalEvo && !pokemon.isBaby)
        }
        return pokemonList
    }

    render() {
        const pokemonList = this.getPokemonList()
        return (
            <div className='pokemon-list'>
                <AutoSizer >
                    {({ height, width }) => (
                        <List
                        height={height}
                        itemCount={pokemonList.length}
                        itemSize={height/5}
                        width={width}
                    >
                        {({index, style}) => 
                            <div style={style}>
                                <Pokemon pokemon={pokemonList[index]} key={`pokemon-${pokemonList[index].num}`}/>
                            </div>
                        }
                    </List>
                    )}
                </AutoSizer>
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

                /*{this.getPokemonList().map(pokemon => (
                        <Pokemon pokemon={pokemon} key={`pokemon-${pokemon.num}`}/>
                ))}*/