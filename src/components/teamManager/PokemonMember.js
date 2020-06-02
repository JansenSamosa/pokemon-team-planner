import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeFromTeam } from '../../redux/actions/teamActions'

export class PokemonMember extends Component {
    getPokemon = () => this.props.pokemon.filter(pokemon => pokemon.num === parseInt(this.props.pokemonMember))[0]

    renderSprite = () => {
        const pokemon = this.getPokemon()
        if(pokemon) {
            return <img src={pokemon.sprite} alt=''/>
        } else return null
    }

    removePokemonFromTeam = () => {
        this.props.removeFromTeam(this.props.slot)
    }
    render() {
        return (
            <div className='pokemon'>
                <div className='sprite' onClick={this.removePokemonFromTeam}>
                    {this.renderSprite()}
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
