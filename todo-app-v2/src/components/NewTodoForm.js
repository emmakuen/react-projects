import React, { Component } from 'react'
import { FaPlus } from "react-icons/fa";

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            title: "",
            todo: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            active: false,
            title: "",
            todo: ""
        })

        let title = this.state.title
        let titleToSubmit = ""
        if (title.length === 0) {
            titleToSubmit = "Untitled"
        } else {
            titleToSubmit = title
        }

        this.props.submit({
            title: titleToSubmit,
            todo: this.state.todo
        })
    }

    handleClick(e) {
        this.setState({
            active: true
        })
    }

    handleChange(e) {
        this.setState({
            active: true,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="NewTodoForm" onSubmit={this.handleSubmit}>
                <form>
                    {this.state.active &&
                        <input
                            className="title"
                            name="title"
                            placeholder="Title"
                            onChange={this.handleChange}
                            value={this.state.title}
                            autoComplete="off"
                        />}
                    <textarea
                        className={this.state.active ? "active" : "inactive"}
                        name="todo"
                        placeholder="Add new task..."
                        onClick={this.handleClick}
                        onChange={this.handleChange}
                        value={this.state.todo}
                        autoComplete="off"
                    />
                    <button
                        type='submit'
                        className={this.state.active ? "active" : "inactive"}
                        disabled={this.state.todo ? false : true}
                    ><FaPlus /></button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm