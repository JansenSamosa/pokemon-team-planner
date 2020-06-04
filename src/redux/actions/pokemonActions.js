import axios from 'axios'

import { FETCH_POKEMON } from '../types'

export const fetchPokemon = () => {
    return (dispatch) => {
        let pokemon = []

        let i = 0
        const fetchPoke = setInterval(() => {
            Promise.all(
                [axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}`), 
                axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i+1}/`)]
            )
                .then(response => {
                    const res1 = response[0]
                    const res2 = response[1]

                    let types = res1.data.types.sort((a,b) => a.slot-b.slot)
                    let newPokemon = {
                        num: res1.data.id, 
                        name: res1.data.name,
                        types: types.map(type => type.type.name),
                        //stats order is - speed, sdef, satk, def, atk, hp
                        stats: res1.data.stats.map(stat => stat.base_stat),
                        //isFinalEvo is set during dispatch
                        isFinalEvo: false,
                        sprite: res1.data.sprites.front_default,
                        evolution_chain_url: res2.data.evolution_chain.url
                    }

                    //Puts 'normal' type in slot 2 if there are two types
                    if(newPokemon.types[0].name === 'normal' && newPokemon.types[1]) {
                        newPokemon.types = newPokemon.types.reverse()
                    }

                    pokemon.push({...newPokemon})
                })
                .catch(err => {
                    //send pokemon data if recieved all pokemon
                    dispatch({
                        type: FETCH_POKEMON,
                        payload: {
                            pokemon
                        }
                    })
                    clearInterval(fetchPoke)
                })
            //send pokemon data every 250 pokemon
            if(i % 250 === 0 || i === 12) {
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