import React, { Component } from 'react'

import PokemonMember from './PokemonMember'

import './teamManager.scss'

export class TeamManager extends Component {
    render() {
        return (
            <div className='team-manager'>
                <div className='team-pokemon'>
                    <PokemonMember slot='1' key='pokemonmember-1'/>
                    <PokemonMember slot='2' key='pokemonmember-2'/>
                    <PokemonMember slot='3' key='pokemonmember-3'/>
                    <PokemonMember slot='4' key='pokemonmember-4'/>
                    <PokemonMember slot='5' key='pokemonmember-5'/>
                    <PokemonMember slot='6' key='pokemonmember-6'/>
                </div>
            </div>
        )
    }
}

export default TeamManager
