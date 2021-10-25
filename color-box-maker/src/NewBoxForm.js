import React, { Component } from "react";
import './NewBoxForm.css'

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: "",
            width: "",
            height: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.addItem({
            backgroundColor: this.state.backgroundColor,
            width: `${this.state.width}px`,
            height: `${this.state.height}px`
        })
        this.setState({
            backgroundColor: "",
            width: "",
            height: ""
        })

    }

    render() {
        return (
            <div>
                <form className="NewBoxForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="backgroundColor">Color</label>
                    <input
                        id="backgroundColor"
                        name="backgroundColor"
                        value={this.state.backgroundColor}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>);
    }
}

export default NewBoxForm;
