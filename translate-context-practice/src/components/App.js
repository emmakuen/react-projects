import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageSelector from './LanguageSelector'
import LanguageContext, { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class App extends Component {
    state = {color: 'green'}

    render() {
        return (
            <div className='ui container'>
            <LanguageStore>
                <LanguageSelector/>
                    <div>
                        Select a color
                        <button 
                            onClick={() => this.setState({color: 'orange'})}
                            className='ui button orange'
                        >Orange</button>
                        <button 
                            onClick={() => this.setState({ color: 'teal'})}
                            className='ui button teal'
                        >Teal</button>
                    </div>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}
