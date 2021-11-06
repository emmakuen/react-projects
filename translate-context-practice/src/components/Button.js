import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class Button extends Component {
    renderSubmit = (language) => language === 'english' ? 'Submit' : 'Voorleggen'
    renderColor = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {

        return (
            <ColorContext.Consumer>
                {(color) => this.renderColor(color)}
            </ColorContext.Consumer>
        )
    }
}
