import React, { Component } from 'react'

export class SearchFilterSortBar extends Component {
    state = {
        search: '',
        filter: '',
        sort: ''
    }

    setSearchOptions = () => {
        setTimeout(() => {
            this.props.setSearchOptions({...this.state})
        }, 10)
    }

    changeSearch = e => {
        this.setState({...this.state, search: e.target.value}, this.setSearchOptions())
    }
    addFilter = e => {
        this.setState({...this.state, filter: e.target.value}, this.setSearchOptions())
    }
    render() {
        return (
            <div className='search-filter-sort-bar'>
                <input type='text' onChange={this.changeSearch.bind(this)} placeholder='Search for pokemon'/>
                <select onChange={this.addFilter.bind(this)}>
                    <option value='all'>All</option>
                    <option value='normal'>Normal</option>
                    <option value='grass'>Grass</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='poison'>Poison</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='bug'>Bug</option>
                    <option value='ghost'>Ghost</option>
                    <option value='electric'>Electric</option>
                    <option value='psychic'>Psychic</option>
                    <option value='ice'>Ice</option>
                    <option value='dragon'>Dragon</option>
                    <option value='dark'>Dark</option>
                    <option value='steel'>Steel</option>
                    <option value='fairy'>Fairy</option>
                </select>
            </div>
        )
    }
}

export default SearchFilterSortBar
