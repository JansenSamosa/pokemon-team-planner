import React, { Component } from 'react'

import { getTypeDefenseStrengths } from '../../Helpers'

import PokemonType from '../PokemonType'


export class TeamOverview extends Component {
    getAvgStrengths = () => {
        //Gets all the strengths/weaknesses of all the pokemon in team
        const teamTypeStrengths = this.props.pokemonTeam.map(pokemon => getTypeDefenseStrengths(pokemon.types))

        //instantiates the avg strengths/weaknesses
        let avgStrengths = {}

        //Adds up all the strengths/weaknesses of teamTypeStrengths into avgStrengths
        for(let i=0; i < teamTypeStrengths.length; i++) {
            for(const type in teamTypeStrengths[i]) {
                if(avgStrengths[`${type}`]) {
                    avgStrengths[`${type}`] += teamTypeStrengths[i][`${type}`]
                }
                else avgStrengths[`${type}`] = teamTypeStrengths[i][`${type}`]
            }
        }
        //Divides avgStrengths by the amount of team members to get avg
        for(const type in avgStrengths) {
            avgStrengths[`${type}`] /= teamTypeStrengths.length
        }
        return avgStrengths
    }
    getAvgStats = () => {
        const pokemonStats = this.props.pokemonTeam.map(pokemon => pokemon.stats)
        let avgStats = [0, 0, 0, 0, 0, 0]

        for(let j = 0; j < pokemonStats.length; j++) {
            const stats = pokemonStats[j]
            for(let i = 0; i < stats.length; i++) {
                avgStats[i] += stats[i]        
            }
        }
        avgStats = avgStats.map(stat => Math.round(stat/pokemonStats.length))

        return avgStats
    }
    renderOverview = () => {
        //Gets data for average strengths/weaknesses
        const avgStrengths = this.getAvgStrengths()
        let good = [], average = [], bad = []

        //bad is 1.5 - 4x avg  ...  average is 0.5 - 1.5x avg  ...  good is 0 - 0.5x avg
        for(const type in avgStrengths) {
            const strength = avgStrengths[`${type}`]
            if(strength >= 0 && strength <= .5) good.push(type)
            if(strength > .5 && strength <= 1.5) average.push(type)
            if(strength > 1.5 && strength <= 4) bad.push(type)
        }   
    
        //Gets data for average stats
        const avgStats = this.getAvgStats()
        return <div className='overview'>
            <h1 className='title'>Team Overview</h1>
            <div className='types'>
                <div className='good'>
                    <h1>Good against</h1>
                    <p>(0x - 0.5x dmg)</p>
                    <div className='clearleft'></div>
                    {good.map(type => <PokemonType key={`types-good-${type}`} type={type}/>)}
                </div>
                <div className='average'>
                    <h1>Average against</h1>
                    <p>(0.5x - 1.5x dmg)</p>
                    <div className='clearleft'></div>
                    {average.map(type => <PokemonType key={`types-average-${type}`}type={type}/>)}
                </div>
                <div className='bad'>
                    <h1>Bad against</h1>
                    <p>(1.5x - 4x dmg)</p>
                    <div className='clearleft'></div>
                    {bad.map(type => <PokemonType key={`types-bad-${type}`}type={type}/>)}
                </div>
            </div>
            <div className='stats-avg'>
                <div className='stats'>
                    <div className='stat'>
                        <p className='stat-name'>Speed</p>
                        <p className='stat-num'>{avgStats[5]}</p>
                        <p className='stat-avg'>(avg)</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>HP</p>
                        <p className='stat-num'>{avgStats[0]}</p>
                        <p className='stat-avg'>(avg)</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>Attack</p>
                        <p className='stat-num'>{avgStats[1]}</p>
                        <p className='stat-avg'>(avg)</p>
                    </div>
                    <div className='stat'>
                        <p className='stat-name'>Special Attack</p>
                        <p className='stat-num'>{avgStats[3]}</p>
                        <p className='stat-avg'>(avg)</p>
                    </div>
                    
                    <div className='stat'>
                        <p className='stat-name'>Defense</p>
                        <p className='stat-num'>{avgStats[2]}</p>
                        <p className='stat-avg'>(avg)</p>
                    </div>
                    
                    <div className='stat'>
                        <p className='stat-name'>Special Defense</p>
                        <p className='stat-num'>{avgStats[4]}</p>
                        <p className='stat-avg'>(avg)</p>
                    </div>
                    
                </div>
            </div>
        </div>
    }
    render() {
        return (
               this.renderOverview()
        )
    }
}

export default TeamOverview
