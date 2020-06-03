import React, { Component } from 'react'
import { connect } from 'react-redux'
import chroma from 'chroma-js'

import PokemonType from '../PokemonType'

import { removeFromTeam } from '../../redux/actions/teamActions'

export class PokemonMember extends Component {

    //Gets pokemon data from id obtained from redux store
    getPokemon = () => this.props.pokemon.filter(pokemon => pokemon.num === parseInt(this.props.pokemonMember))[0]

    removePokemonFromTeam = () => {
        this.props.removeFromTeam(this.props.slot)
    }
    getStyle = () => {
        let style = {}
        if(this.getPokemon()) {
            const pokemon = this.getPokemon()
            style.backgroundColor = window.getTypeColor(pokemon.types[0]) 
            style.borderColor = chroma(window.getTypeColor(pokemon.types[0])).darken(1)
        }

        return style
    }
    renderName = () => {
        if(this.getPokemon()) {
            let name = this.getPokemon().name
            return name.charAt(0).toUpperCase() + name.slice(1)
        }
    }
    renderSprite = () => {
        const pokemon = this.getPokemon()
        if(pokemon) {
            return <img src={pokemon.sprite} alt=''/>
        } else return null
    }
    renderTypes = () => {
        console.log(this.getPokemon())
        if(this.getPokemon()) {
            return this.getPokemon().types.map(type => (
                <PokemonType type={type}/>
            ))
        }
    }
    render() {
        return (
            <div className='pokemon'>
                <div className='name'>{this.renderName()}</div>
                <div className='sprite' onClick={this.removePokemonFromTeam} style={this.getStyle()}>
                    <div className='overlay'></div>
                    {this.renderSprite()}
                </div>
                <div className='types' >
                    {this.renderTypes()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.pokemon,
    pokemonMember: state.team.team[parseInt(ownProps.slot)-1]
})

export default connect(mapStateToProps, { removeFromTeam })(PokemonMember)
