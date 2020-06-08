import React, { Component } from 'react'
import { connect } from 'react-redux'
import chroma from 'chroma-js'

import { getTypeColor } from '../../Helpers'

import PokemonType from '../PokemonType'

import { removeFromTeam, setSelectedPokemon } from '../../redux/actions/teamActions'

export class PokemonMember extends Component {

    removePokemonFromTeam = () => {
        this.props.removeFromTeam(this.props.slot)
    }
    getStyle = () => {
        let style = {}
        if(this.props.pokemonMember) {
            const pokemon = this.props.pokemonMember
            style.backgroundColor = getTypeColor(pokemon.types[0]) 
            if(pokemon.types[1]) {
                style.borderLeft = `.5vh solid ${chroma(getTypeColor(pokemon.types[0])).darken(1)}`
                style.borderTop = `.5vh solid ${chroma(getTypeColor(pokemon.types[0])).darken(1)}`
                style.borderRight = `.85vh solid ${chroma(getTypeColor(pokemon.types[1])).darken(1)}`
                style.borderBottom = `.85vh solid ${chroma(getTypeColor(pokemon.types[1])).darken(1)}`
            } else {
                style.borderColor = chroma(getTypeColor(pokemon.types[0])).darken(1)
            }
        }

        return style
    }
    renderName = () => {
        if(this.props.pokemonMember) {
            let name = this.props.pokemonMember.name
            return name.charAt(0).toUpperCase() + name.slice(1)
        }
    }
    renderSprite = () => {
        const pokemon = this.props.pokemonMember
        if(pokemon) {
            return <img src={pokemon.sprite} alt=''/>
        } else return <div className='pokeball'>         
            <div className='top-half'></div>
            <div className='bottom-half'></div>
            <div className='middle-ball'></div>
        </div>
    }
    renderInfoBtn = () => {
        if(this.props.pokemonMember) return (
        <p 
            className='more-info-btn'
            onClick={e => {
                e.stopPropagation()
                this.props.setSelectedPokemon(this.props.pokemonMember.num)
            }}
        >?</p>)
    }
    renderTypes = () => {
        if(this.props.pokemonMember) {
            return this.props.pokemonMember.types.map(type => (
                <PokemonType type={type} key={`pokemonmember-${this.props.slot}-type-${type}`}/>
            ))
        }
    }
    render() {
        return (
            <div className='pokemon'>
                <p className='name'>{this.renderName()}</p>
                <div className='sprite' onClick={this.removePokemonFromTeam} style={this.getStyle()}>
                    {this.renderSprite()}
                    {this.renderInfoBtn()}
                    <div className='overlay'></div>
                </div>
                <div className='types' >
                    {this.renderTypes()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    pokemonMember: state.pokemon.filter(pokemon => pokemon.num === parseInt(state.team.team[parseInt(ownProps.slot)-1]))[0]
})

export default connect(mapStateToProps, { removeFromTeam, setSelectedPokemon })(PokemonMember)
