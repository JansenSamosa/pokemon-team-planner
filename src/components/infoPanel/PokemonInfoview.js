import React, { Component } from 'react'
import { connect } from 'react-redux'
import chroma from 'chroma-js'

import { setSelectedPokemon } from '../../redux/actions/teamActions'

import { uppercase, getTypeDefenseStrengths, getTypeColor } from '../../Helpers'

import PokemonType from '../PokemonType'

export class PokemonInfoview extends Component {
    shouldComponentUpdate(nextProps) {
        if(this.props.pokemon === nextProps.pokemon) return false
        else return true
    }
    toOverview = () => {
        this.props.setSelectedPokemon(0)
    }
    getTypeColorBarStyle = (typeIndex) => {
        const {types} = this.props.pokemon
        let style = {}
        if(types[typeIndex]) {
            let backgroundColor = chroma(getTypeColor(types[typeIndex])).saturate(3)
            style.backgroundColor = backgroundColor

            //Sets width to 100% if there is no second type
            if(typeIndex === 0 && !types[typeIndex + 1]) {
                style.width = '106%'
            }
        }
        return style
    }
    renderStrengths = () => {
        //Gets strengths/weaknesses of pokemon
        const strengths = getTypeDefenseStrengths(this.props.pokemon.types)

        //arrays which will contain types defending on strength
        let immune = [], pointfive = [], one = [], two = [], four = []
        for(const str in strengths) {
            if(strengths[str] === 0) immune.push(str)
            if(strengths[str] === 0.5) pointfive.push(str)
            if(strengths[str] === 1) one.push(str)
            if(strengths[str] === 2) two.push(str)
            if(strengths[str] === 4) four.push(str)
        }
        return (
            <div className='strengths'>
                <h1 className='strengths-title'>Defense Strengths & Weaknesses -</h1>
                <div className='immune'>
                    <h1>Immune</h1>
                    <div className='clearleft'></div>
                    {immune.map(type => <PokemonType key={`types-good-${type}`} type={type}/>)}
                </div>
                <div className='pointfive'>
                    <h1>0.5x</h1>
                    <div className='clearleft'></div>
                    {pointfive.map(type => <PokemonType key={`types-average-${type}`}type={type}/>)}
                </div>
                <div className='one'>
                    <h1>1x</h1>
                    <div className='clearleft'></div>
                    {one.map(type => <PokemonType key={`types-bad-${type}`}type={type}/>)}
                </div>
                <div className='two'>
                    <h1>2x</h1>
                    <div className='clearleft'></div>
                    {two.map(type => <PokemonType key={`types-bad-${type}`}type={type}/>)}
                </div>
                <div className='four'>
                    <h1>4x</h1>
                    <div className='clearleft'></div>
                    {four.map(type => <PokemonType key={`types-bad-${type}`}type={type}/>)}
                </div>
            </div>
        )
    }
    renderStats = () => {
        const { stats } = this.props.pokemon
        return <div className='stats'>
            <div className='stat'>
                <p className='stat-name'>Speed</p>
                <p className='stat-num'>{stats[5]}</p>
            </div>
            <div className='stat'>
                <p className='stat-name'>HP</p>
                <p className='stat-num'>{stats[0]}</p>
            </div>
            <div className='stat'>
                <p className='stat-name'>Attack</p>
                <p className='stat-num'>{stats[1]}</p>
            </div>
            <div className='stat'>
                <p className='stat-name'>Sp Attack</p>
                <p className='stat-num'>{stats[3]}</p>
            </div>
            
            <div className='stat'>
                <p className='stat-name'>Defense</p>
                <p className='stat-num'>{stats[2]}</p>
            </div>
            
            <div className='stat'>
                <p className='stat-name'>Sp Defense</p>
                <p className='stat-num'>{stats[4]}</p>
            </div>
            
        </div>
    }
    renderDetails = () => {
        const { types, descriptions, sprite } = this.props.pokemon

        let description = descriptions[Math.round(Math.random() * descriptions.length)]

        if(description === undefined) description = descriptions[0]

        return <div className='details'>
            <div className='left'>
                <img src={sprite}></img>
                <div className='types'>
                    {types.map(type => <PokemonType type={type} />)}
                </div>
            </div>
            
            <div className='description'>   
                <p className='text'>{`${description.text}`}</p>
                <p className='game'>{` - Pokemon ${uppercase(description.game)}`}</p>
            </div>
        </div>
    }
    render() {
        return (
            <div className='pokemon-infoview'>
                <div className='type-color' style={this.getTypeColorBarStyle(0)}/>
                <div className='type2-color' style={this.getTypeColorBarStyle(1)}/>
                <h1 className='title'>{`${uppercase(this.props.pokemon.name)} Info`}
                    <h1 onClick={this.toOverview}className='back'> {`← Back to Overview`}</h1>
                </h1>
                {this.renderDetails()}
                {this.renderStats()}
                {this.renderStrengths()}
            </div>
        )
    }
}

export default connect(null, { setSelectedPokemon })(PokemonInfoview)
