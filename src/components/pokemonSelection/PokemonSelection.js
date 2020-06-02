import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonList from './PokemonList'

import './pokemonSelection.scss'

export class PokemonSelection extends Component {
    render() {
        return (
            <div className='pokemon-selection'>
                <PokemonList  pokemon={this.props.pokemon}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pokemon: state.pokemon
})

export default connect(mapStateToProps, {})(PokemonSelection)
