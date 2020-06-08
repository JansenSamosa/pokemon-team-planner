import { ADD_TO_TEAM, REMOVE_FROM_TEAM, SET_SELECTED_POKEMON } from '../types'

const initialState = {
    team: [],
    selectedPokemon: 0
}

export default (state = initialState, action) => {
    let newTeam = undefined
    switch(action.type) {
        case ADD_TO_TEAM:
            newTeam = state.team
            if(newTeam.length < 6) {
                newTeam.push(action.payload.pokemonMember)
            }
            return {...state, team: newTeam}                                        
        case REMOVE_FROM_TEAM: 
            newTeam = state.team
            newTeam.splice(action.payload.slot - 1, 1)
            return {...state, team: newTeam} 
        case SET_SELECTED_POKEMON: 
            let selected = action.payload.pokemonid
            return {...state, selectedPokemon: selected}                                       
        default:
            return state
    }
}