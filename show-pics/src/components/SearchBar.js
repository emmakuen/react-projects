import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchTerm: ""
    }

    onInputChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.state.searchTerm)

        this.setState({ searchTerm: '' })
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.searchTerm}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

