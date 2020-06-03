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
        window.getTypeColor = this.getTypeColor
    }
    getTypeColor = type => {
        let color = ''
        switch(type) {
            case 'normal':
                color='#bebeb2'
                break
            case 'grass':
                color='#8cd751'
                break
            case 'fire':
                color='#fa5643'
                break
            case 'water':
                color='#56aeff'
                break
            case 'fighting':
                color='#a85644'
                break
            case 'flying':
                color='#79a3ff'
                break
            case 'poison':
                color='#ab5da2'
                break
            case 'ground':
                color='#e9c856'
                break
            case 'rock':
                color='#cdbc72'
                break
            case 'bug':
                color='#c3d21f'
                break
            case 'ghost':
                color='#7975d7'
                break
            case 'electric':
                color='#fde53c'
                break
            case 'psychic':
                color='#f26295'
                break
            case 'ice':
                color='#96f1ff'
                break
            case 'dragon':
                color='#8673ff'
                break
            case 'dark':
                color='#866350'
                break
            case 'steel':
                color='#c4c2db'
                break
            case 'fairy':
                color='#faadff'
                break
            default:
                color='#bebeb2'
                break
        }
        return color
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
