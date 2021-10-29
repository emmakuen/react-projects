import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

export default class App extends Component {
    state = { lat: null, errorMessage: "" }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if (!this.state.lat && !this.state.errorMessage) {
            return <Spinner message="Please accept location request" />
        } else {
            return (
                <div>
                    {this.state.lat
                        ? <SeasonDisplay lat={this.state.lat} />
                        : `Error: ${this.state.errorMessage}`
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )

    }
}


ReactDOM.render(<App />, document.getElementById('root'))



