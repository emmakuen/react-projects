import React from 'react'
import he from 'he'

const VideoDetail = ({ video }) => {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui segment">
                <div className="ui embed">
                    <iframe src={`${videoSrc}`} title='video player'/>
                </div>
                <h4 className="ui header">
                    { he.decode(video.snippet.title)}
                </h4>
                <p>{ he.decode(video.snippet.description) }</p>
            </div>
        </div>
    )
}

export default VideoDetail
