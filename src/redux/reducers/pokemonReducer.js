import { FETCH_POKEMON } from '../types'

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POKEMON': 
            let pokemon = action.payload.pokemon.sort((a, b) => a.num - b.num)
            for(let i=0; i<pokemon.length; i++) {
                //set isFinalEvo
                if(i > 0) {
                    if(pokemon[i].evolution_chain_url !== pokemon[i-1].evolution_chain_url) {
                        pokemon[i-1].isFinalEvo = true
                    }
                }
            }
            return [...pokemon]
        default:
            return state
    }
}