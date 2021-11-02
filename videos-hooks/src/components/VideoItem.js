import React from 'react'
import he from 'he'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    const onItemClick = () => {
        onVideoSelect(video)
    }
    return (
        <div className='video-item item' onClick={onItemClick}>
            <img 
            className='ui image' 
            src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    { he.decode(video.snippet.title) }
                </div>
            </div>

        </div>
    )
}

export default VideoItem
