import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'
import history from '../../history'

const StreamDelete = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = () => {
        props.deleteStream(props.stream.id)
    }

    const actions = (
        <>
            <Link to='/' className="ui button negative" onClick={handleClick}>Delete</Link>
            <Link to='/' className="ui button">Cancel</Link>
        </>
    )

    const handleDismiss = () => {
        history.push('/')
    }



    return (
        <div>
            <Modal
                title='Delete Steam'
                content={`Are you sure you want to delete ${props.stream ? props.stream.title : 'this stream'}?`}
                actions={actions}
                onDismiss={handleDismiss}
            />
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
