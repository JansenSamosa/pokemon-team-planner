import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../types'

export const addToTeam = pokemon => {
    return dispatch => {
        dispatch({
            type:ADD_TO_TEAM,
            payload: {
                pokemonMember: `${pokemon.num}`
            }
        })
    }
}

export const removeFromTeam = slot => {
    return dispatch => {
        dispatch({
            type: REMOVE_FROM_TEAM,
            payload: {
                slot
            }
        })
    }
}