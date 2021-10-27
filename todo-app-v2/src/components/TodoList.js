import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import { v4 as uuid } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)

    }

    addTodo(todo) {
        let newTodo = {
            ...todo,
            id: uuid()
        }

        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }))
    }

    removeTodo(id) {
        let todos = this.state.todos
        let updatedTodos = todos.filter(todo => todo.id !== id)

        this.setState({
            todos: updatedTodos
        })
    }

    editTodo(id, title, content) {
        let todos = this.state.todos
        let todoIdx = todos.findIndex(todo => todo.id === id)
        todos[todoIdx].title = title
        todos[todoIdx].todo = content
        this.setState({
            todos: todos
        })

    }

    render() {
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <NewTodoForm submit={this.addTodo} />
                <div className="todo-container">
                    {this.state.todos.map(todo =>
                    (<Todo
                        title={todo.title}
                        content={todo.todo}
                        remove={this.removeTodo}
                        edit={this.editTodo}
                        id={todo.id}
                        key={todo.id}
                    />)
                    )}
                </div>
            </div>
        )
    }
}

export default TodoList