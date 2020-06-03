import React, { Component } from 'react'
import { connect } from 'react-redux'

import InfoColumn from './InfoColumn'

import './infoPanel.scss'

export class InfoPanel extends Component {
    //Gets pokemon data from id obtained from redux store
    getPokemon = (id) => this.props.pokemon.filter(pokemon => pokemon.num === parseInt(id))[0]
    renderColumns = () => {
        return this.props.team.team.map((pokemonid,index) => {
            return <InfoColumn key={`column-${index+1}`} pokemon={this.getPokemon(pokemonid)}/>
        })
    }
    render() {
        return (
            <div className='info-panel'>
                <div className='columns'>
                    {this.renderColumns()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    pokemon: state.pokemon,
    team: state.team
})

export default connect(mapStateToProps, {})(InfoPanel)
