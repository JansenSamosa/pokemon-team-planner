import React, { Component } from 'react'
import chroma from 'chroma-js'
import { connect } from 'react-redux'

import PokemonType from '../PokemonType'

import { getTypeColor } from '../../Helpers'

import { addToTeam, setSelectedPokemon } from '../../redux/actions/teamActions'

export class Pokemon extends Component {

    addPokemonToTeam = () => {
        //Adds this pokemon to the team
        this.props.addToTeam(this.props.pokemon)
    }

    getPokedexNum = () => {
        let { num } = this.props.pokemon
        num = num.toString()
        
        if(num.length === 1) num = '00' + num
        if(num.length === 2) num = '0' + num

        return `#${num}`
    }
    getTypeColorBarStyle = (typeIndex) => {
        const {types} = this.props.pokemon
        let style = {}
        if(types[typeIndex]) {
            let backgroundColor = chroma(getTypeColor(types[typeIndex])).saturate(3)
            style.backgroundColor = backgroundColor

            //Sets width to 100% if there is no second type
            if(typeIndex === 0 && !types[typeIndex + 1]) {
                style.width = '100%'
            }
        }
        return style
    }
    renderStats = () => {
        //stats order is - hp, atk, def, spatk, spdef, speed
        let jsx = []

        //pushes stat names into jsx
        jsx.push(
            <div key='stat-names' className='stat-names'>
                <p key='stat-hp-name'>HP</p>
                <p key='stat-atk-name'>Atk</p>
                <p key='stat-def-name'>Def</p>
                <p key='stat-spatk-name'>SpAtk</p>
                <p key='stat-apdef-name'>SpDef</p>
                <p key='stat-speed-name'>Speed</p>
            </div>
        )
        //pushes the stat numbers into jsx
        jsx.push(
            <div key='stat-nums' className='stat-nums'>
                {this.props.pokemon.stats.map((stat, index) => (
                    <p key={`${this.props.pokemon.name}-stat-${index}`}>{`${stat}`}</p>
                ))}
            </div>
        )
        return jsx
    }
    viewInfo = e => {
        e.stopPropagation()
        this.props.setSelectedPokemon(this.props.pokemon.num)
    }
    render() {
        return (
            
            <div className='pokemon' onClick={this.addPokemonToTeam}>
                <div className='type-color' style={this.getTypeColorBarStyle(0)}/>
                <div className='type2-color' style={this.getTypeColorBarStyle(1)}/>
                <p className='pokedex-num'>{this.getPokedexNum()}</p>
                <p className='more-info-btn' onClick={this.viewInfo.bind(this)}>?</p>
                <div className='sprite'>
                    <img src={this.props.pokemon.sprite}></img>
                </div>
                <div className='info'>
                    <h1>
                        {`${this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}`}
                    </h1>

                    <div className='types' >
                        {this.props.pokemon.types.map(type => {
                            return <PokemonType className='type' type={type} key={`${this.props.key} - ${type}`} />
                        })}
                    </div>
                    <div className='stats'>
                        
                        {this.renderStats()}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {addToTeam, setSelectedPokemon})(Pokemon)
