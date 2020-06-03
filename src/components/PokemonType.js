import React, { Component } from 'react'
import chroma from 'chroma-js'

import { getTypeColor } from '../Helpers.js'

import './misc.scss'

export class PokemonType extends Component {

    getStyle = () => {
        if(this.props.noBorder) {
            return { backgroundColor: `${getTypeColor(this.props.type)}`}
        } else {
            return { backgroundColor: `${getTypeColor(this.props.type)}`,
                    border: `.25vw solid ${chroma(getTypeColor(this.props.type)).darken(.5)}`}
        }
    }
    render() {
        return (
            <div className='pokemon-type' style={this.getStyle()}>
                {this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}
            </div>
        )
    }
}

export default PokemonType
