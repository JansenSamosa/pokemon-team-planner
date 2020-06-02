import React, { Component } from 'react'

import PokemonMember from './PokemonMember'

import './teamManager.scss'

export class TeamManager extends Component {
    render() {
        return (
            <div className='team-manager'>
                <div className='team-pokemon'>
                    <PokemonMember slot='1'/>
                    <PokemonMember slot='2'/>
                    <PokemonMember slot='3'/>
                    <PokemonMember slot='4'/>
                    <PokemonMember slot='5'/>
                    <PokemonMember slot='6'/>
                </div>
            </div>
        )
    }
}

export default TeamManager
