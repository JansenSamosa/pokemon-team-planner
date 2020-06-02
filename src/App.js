import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import { fetchPokemon } from './redux/actions/pokemonActions'

import PokemonSelection from './components/pokemonSelection/PokemonSelection'
import TeamManager from './components/teamManager/TeamManager'
import './App.scss';

export class App extends Component {
    componentDidMount() {
        store.dispatch(fetchPokemon())
    }
    render() {
        return (
            <Provider store={store} >
                <div className='app'>
                    <TeamManager />
                    <PokemonSelection />
                </div>
            </Provider>
        )
    }
}

export default App
