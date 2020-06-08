import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTypeDefenseStrengths } from '../../Helpers'

import TeamOverview from './TeamOverview'
import PokemonInfoview from './PokemonInfoview'
import PokemonType from '../PokemonType'

import './infoPanelOverview.scss'
import './infoPanelPokemonview.scss'

export class InfoPanel extends Component {

    //Gets pokemon data from id obtained from redux store
    getPokemon = (id) => this.props.pokemon.filter(pokemon => pokemon.num === parseInt(id))[0]

    renderInfoPanel = () => {
        //If pokemon is selected, render Info View for that pokemon,
        //otherwise, render teamOverview
        if(this.props.team.selectedPokemon !== 0) {  
            console.log(this.props.team.selectedPokemon)
            return <PokemonInfoview pokemon={this.getPokemon(this.props.team.selectedPokemon)}/>
        } else {
            //Render info only if a pokemon is in the team
            if(this.props.team.team.length > 0 ) {    
                return <TeamOverview pokemonTeam={this.props.team.team.map(memberid => this.getPokemon(memberid))}/>      
            } else {
                return <div className='empty-team'>
                    <h1>Your team is empty! <p>Add a Pokemon to your team to get started</p></h1>
                </div>
            }
        }
        
    }
    render() {
        return (
            <div className='info-panel'>
                {this.renderInfoPanel()}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    pokemon: state.pokemon,
    team: state.team
})

export default connect(mapStateToProps, {})(InfoPanel)

/*<div className='columns'>
                    {this.renderColumns()}
                </div>*/