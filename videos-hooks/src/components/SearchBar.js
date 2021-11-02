import React, { useState } from 'react'

const SearchBar = ({ onSearchSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const onInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        onSearchSubmit(searchTerm)
    }

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className="field">
                    <label htmlFor="term">Video Search</label>
                    <input
                        type="text"
                        name="term"
                        id="term"
                        value={searchTerm}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar