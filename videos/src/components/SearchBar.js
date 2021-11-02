import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchTerm: ""
    }

    onInputChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label htmlFor="term">Video Search</label>
                        <input
                            type="text"
                            name="term"
                            id="term"
                            value={this.state.searchTerm}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
