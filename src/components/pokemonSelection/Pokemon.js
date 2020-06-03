import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonType from '../PokemonType'

import { addToTeam } from '../../redux/actions/teamActions'

export class Pokemon extends Component {

    addPokemonToTeam = () => {
        //Adds this pokemon to the team
        this.props.addToTeam(this.props.pokemon)
    }

    render() {
        return (
            <div className='pokemon' onClick={this.addPokemonToTeam}>
                <div className='sprite'>
                    <img src={this.props.pokemon.sprite}></img>
                </div>
                <div className='info'>
                    <h1>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h1>

                    <div className='types' >
                        {this.props.pokemon.types.map(type => {
                            return <PokemonType className='type' type={type} key={`${this.props.key} - ${type}`} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {addToTeam})(Pokemon)
