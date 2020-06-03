import axios from 'axios'

import { FETCH_POKEMON } from '../types'

export const fetchPokemon = () => {
    return (dispatch) => {
        let pokemon = []

        let i = 0
        const fetchPoke = setInterval(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
                .then(res => {
                    let types = res.data.types.sort((a,b) => a.slot-b.slot)

                    //Puts 'normal' type in slot 2 if there are two types
                    if(types[0].type.name === 'normal' && types[1]) {
                        types = types.reverse()
                    }
                    pokemon.push({
                        num: res.data.id, 
                        name: res.data.species.name,
                        types: types.map(type => type.type.name),
                        //stats order is - speed, sdef, satk, def, atk, hp
                        stats: res.data.stats.map(stat => stat.base_stat),
                        sprite: res.data.sprites.front_default
                    })
                })
                .catch(err => {
                    pokemon.sort((a, b) => a.num - b.num)
                    dispatch({
                        type: FETCH_POKEMON,
                        payload: {
                            pokemon
                        }
                    })
                    clearInterval(fetchPoke)
                })
            if(i % 250 === 0 || i === 12) {
                pokemon.sort((a, b) => a.num - b.num)
                dispatch({
                    type: FETCH_POKEMON,
                    payload: {
                        pokemon
                    }
                })
            }
            i++
        }, 1)
    }
}