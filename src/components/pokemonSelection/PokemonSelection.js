import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonList from './PokemonList'
import SearchFilterSortBar from './SearchFilterSortBar'

import './pokemonSelection.scss'

export class PokemonSelection extends Component {
    state = {
        searchOptions: {
            search: '',
            filter: 'all',
            sort: ''
        }
    }
    setSearchOptions = newSearchOptions => {
        this.setState({...this.state, searchOptions: {...this.state.searchOptions, ...newSearchOptions}})
    }
    render() {
        return (
            <div className='pokemon-selection'>
                <SearchFilterSortBar setSearchOptions={this.setSearchOptions}/>
                <PokemonList pokemon={this.props.pokemon} searchOptions={this.state.searchOptions}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pokemon: state.pokemon
})

export default connect(mapStateToProps, {})(PokemonSelection)
