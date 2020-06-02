import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addToTeam } from '../../redux/actions/teamActions'

export class Pokemon extends Component {

    getTypeColor = type => {
        let style = {backgroundColor: 'grey'}
        switch(type) {
            case 'normal':
                style.backgroundColor='#bebeb2'
                break
            case 'grass':
                style.backgroundColor='#8cd751'
                break
            case 'fire':
                style.backgroundColor='#fa5643'
                break
            case 'water':
                style.backgroundColor='#56aeff'
                break
            case 'fighting':
                style.backgroundColor='#a85644'
                break
            case 'flying':
                style.backgroundColor='#79a3ff'
                break
            case 'poison':
                style.backgroundColor='#ab5da2'
                break
            case 'ground':
                style.backgroundColor='#e9c856'
                break
            case 'rock':
                style.backgroundColor='#cdbc72'
                break
            case 'bug':
                style.backgroundColor='#c3d21f'
                break
            case 'ghost':
                style.backgroundColor='#7975d7'
                break
            case 'electric':
                style.backgroundColor='#fde53c'
                break
            case 'psychic':
                style.backgroundColor='#f26295'
                break
            case 'ice':
                style.backgroundColor='#96f1ff'
                break
            case 'dragon':
                style.backgroundColor='#8673ff'
                break
            case 'dark':
                style.backgroundColor='#866350'
                break
            case 'steel':
                style.backgroundColor='#c4c2db'
                break
            case 'fairy':
                style.backgroundColor='#faadff'
                break

        }
        return style
    }

    addPokemonToTeam = () => {
        //Adds this pokemon to the team
        this.props.addToTeam(this.props.pokemon)
    }

    render() {
        return (
            <div className='pokemon' onClick={this.addPokemonToTeam}>
                <img src={this.props.pokemon.sprite}></img>
                <h1>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h1>

                <div className='types' >
                    {this.props.pokemon.types.map(type => {
                        return <div key={`${this.props.key} - ${type}`} className='type' style={this.getTypeColor(type)}>{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                    })}
                </div>

            </div>
        )
    }
}

export default connect(null, {addToTeam})(Pokemon)
