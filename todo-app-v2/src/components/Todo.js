import React, { Component } from 'react'
import { FaRegTrashAlt, FaEdit, FaSave } from "react-icons/fa";

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: this.props.title,
            content: this.props.content
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.props.remove(this.props.id)
    }

    handleEdit() {
        this.setState({
            editing: true
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSave() {
        this.setState({
            editing: false
        })
        this.props.edit(this.props.id, this.state.title, this.state.content)
    }
    render() {
        return (
            <div className="Todo">
                {!this.state.editing
                    ?
                    <>
                        <h3>{this.state.title}</h3>
                        <p>{this.state.content}</p>
                    </>
                    :
                    <>
                        <input name="title" value={this.state.title} onChange={this.handleChange} />
                        <textarea name='content' value={this.state.content} onChange={this.handleChange} />
                    </>
                }
                <div className="buttons">
                    {!this.state.editing
                        ?
                        <><button
                            onClick={this.handleClick}
                            className="delete"
                        ><FaRegTrashAlt className="delete icon" /></button>
                            <button
                                className="edit"
                                onClick={this.handleEdit}
                            ><FaEdit className="icon" /></button></>
                        :
                        <button
                            onClick={this.handleSave}
                            className="save"
                        ><FaSave className="icon" /></button>
                    }
                </div>
            </div>
        )
    }
}

export default Todo