import _ from 'lodash'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderLoading = () => {
        return <div>Loading...</div>
    }

    const onSubmit = (formValues) => {
        props.editStream(props.stream.id, formValues)
    }

    const renderStream = () => {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    onSubmit={onSubmit} 
                    initialValues={_.pick(props.stream, 'title', 'description')}
                />
            </div>)
    }

    return (
        <div>
            {!props.stream ? renderLoading() : renderStream()}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
