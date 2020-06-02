import { FETCH_POKEMON } from '../types'

const initialState = []

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POKEMON': 
            return [...action.payload.pokemon]
        default:
            return state
    }
}