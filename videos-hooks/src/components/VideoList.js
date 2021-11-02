import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => <VideoItem 
                key={video.id.videoId} 
                video={video}
                onVideoSelect={onVideoSelect}
            />)

    const style = {
        paddingBottom: "5%"
    }

    return (
        <div className='ui relaxed divided list' style={style}>
            { renderedList }
        </div>
    )
}

export default VideoList
