import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

export default class App extends Component {
    state = {
        totalVideos: [],
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSearchSubmit('viral videos')
    }
    
    onSearchSubmit = async (searchTerm) => {
        const res = await youtube.get('/search', {
            params: {q: searchTerm}
        })

        this.setState({ 
            totalVideos: res.data.items,
            videos: res.data.items, 
            selectedVideo: null }) 
    }

    onVideoSelect = (clickedVideo) => {
        let updatedVideos = this.state.totalVideos.filter(video => video.id.videoId !== clickedVideo.id.videoId)
        this.setState({ videos: updatedVideos, selectedVideo: clickedVideo})
    }



    render() {
        return (
            <div className='ui container'>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>

                {this.state.selectedVideo 
                ? <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
                : <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={this.onVideoSelect}
                />
                }
            </div>
        )
    }
}
