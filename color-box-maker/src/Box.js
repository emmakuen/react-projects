import React, { Component } from "react";

class Box extends Component {
    style = {
        margin: "20px",
        backgroundColor: this.props.backgroundColor,
        width: this.props.width,
        height: this.props.height
    }
    render() {
        return (
            <div className="Box" style={this.style}>

            </div>);
    }
}

export default Box;
