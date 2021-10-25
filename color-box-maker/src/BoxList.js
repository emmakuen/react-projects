import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css'

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: []
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(box) {
        let newBox = { ...box, id: uuid() }
        this.setState(st => ({
            boxes: [...st.boxes, newBox]
        }))
    }

    render() {
        return (
            <div className="BoxList">
                <h1>Color Box Maker</h1>
                <NewBoxForm addItem={this.addItem} />
                <div className="Box-container">
                    {this.state.boxes.map(box =>
                        <Box
                            backgroundColor={box.backgroundColor}
                            width={box.width}
                            height={box.height}
                            key={box.id}
                        />
                    )}

                </div>
            </div>);
    }
}

export default BoxList;
