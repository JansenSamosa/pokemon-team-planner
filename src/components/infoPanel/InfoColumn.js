import React, { Component } from 'react'

import PokemonType from '../PokemonType'

import { getTypeDefenseStrengths } from '../../Helpers'

import './infoPanel.scss'

export class InfoColumn extends Component {
    getStrengths = () => getTypeDefenseStrengths(this.props.pokemon.types)
   
    //val is the strength to look for ie - 4, 2, 1, .5, 0
    renderStrengths = (val, title) => {
        let jsx = []

        //only return jsx if found match
        let returnJsx = true
        
        jsx.push(<h1>{title}</h1>)
        for(const type in this.getStrengths()) {
            if(this.getStrengths()[`${type}`] === val) {
                returnJsx = true
                jsx.push(
                    <PokemonType type={type} noBorder={true}/>
                )
            }
        }
        if(returnJsx )return jsx
    }

    render() {
        return (
            <div className='column'>
                <div className='row'>
                    {this.renderStrengths(0, 'Immune from')}
                </div>
                <div className='row'>
                    {this.renderStrengths(.25, '1/4 from')}
                </div>
                <div className='row'>
                    {this.renderStrengths(.5, '1/2 from')}
                </div>
                <div className='row'>
                    {this.renderStrengths(2, '2x from')}
                </div>
                <div className='row'>
                    {this.renderStrengths(4, '4x from')}
                </div>
            </div>
        )
    }
}

export default InfoColumn
