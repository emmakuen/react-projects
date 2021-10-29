import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

export default class App extends Component {
    state = {
        images: []
    }
    onSearchSubmit = async (searchTerm) => {
        const params = { query: searchTerm }

        const res = await unsplash.get('/search/photos', { params: params })
        this.setState({ images: res.data.results })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}


