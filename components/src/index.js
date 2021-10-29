import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Comment from './components/Comment'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <Comment author="Jim" avatar={faker.image.image()} timeAgo="Today at 10:00PM" text="Allo" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Bob" avatar={faker.image.image()} timeAgo="Yesterday at 11:00AM" text="Hello" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Sam" avatar={faker.image.image()} timeAgo="Today at 2:00AM" text="Hi" />
            </ApprovalCard>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))