import React, { useEffect, useRef } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamShow = (props) => {
    const { id } = props.match.params
    let player
    const videoRef = useRef(null)
    useEffect(() => {
        props.fetchStream(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        buildPlayer()

        return () => {
            if (player !== undefined) {
                player.destroy()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoRef.current, props.stream])

    const buildPlayer = () => {
        if (player !== undefined || !props.stream) {
            return
        }
        player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        player.attachMediaElement(videoRef.current)
        player.load()
    }

    const renderStream = () => {
        const { title, description } = props.stream
        return (
            <div>
                <video 
                    ref={videoRef}
                    style={{ width: '100%'}}
                    controls
                />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }

    return (
        <div>
            {props.stream ? renderStream() : `Loading...`}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
