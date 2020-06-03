import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import { fetchPokemon } from './redux/actions/pokemonActions'

import PokemonSelection from './components/pokemonSelection/PokemonSelection'
import TeamManager from './components/teamManager/TeamManager'
import InfoPanel from './components/infoPanel/InfoPanel'

import './App.scss';

export class App extends Component {
    componentDidMount() {
        store.dispatch(fetchPokemon())
    }

    render() {
        return (
            <Provider store={store} >
                <div className='app'>
                    <div className='left-column'>
                        <TeamManager />
                        <InfoPanel />
                    </div>
                    <div className='right-column'>
                        <PokemonSelection />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App
