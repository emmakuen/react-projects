import React, { Component } from "react";
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props)
        this.deleteHandler = this.deleteHandler.bind(this)
    }
    style = {
        margin: "20px",
        backgroundColor: this.props.backgroundColor,
        width: this.props.width,
        height: this.props.height
    }

    deleteHandler() {
        this.props.deleteItem(this.props.id)
    }
    render() {
        return (
            <div className="One-Box">
                <div className="Box" style={this.style}></div>
                <button className="delete-btn" onClick={this.deleteHandler}>X</button>
            </div>);
    }
}

export default Box;
