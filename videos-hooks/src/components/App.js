import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {

    const [videos, selectedVideo, search, select] = useVideos('viral videos')

    return (
        <div className='ui container'>
            <SearchBar onSearchSubmit={search} />

            {selectedVideo
                ? <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={videos}
                                onVideoSelect={select}
                            />
                        </div>
                    </div>
                </div>
                : <VideoList
                    videos={videos}
                    onVideoSelect={select}
                />
            }
        </div>
    )
}

export default App