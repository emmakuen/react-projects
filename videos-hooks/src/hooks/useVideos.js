import { useState, useEffect } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])
    const [totalVideos, setTotalVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (searchTerm) => {
        const res = await youtube.get('/search', {
            params: { q: searchTerm }
        })

        setVideos(res.data.items)
        setTotalVideos(res.data.items)
        setSelectedVideo(null)
    }

    const select = (clickedVideo) => {
        let updatedVideos = totalVideos.filter(video => video.id.videoId !== clickedVideo.id.videoId)
        setVideos(updatedVideos)
        setSelectedVideo(clickedVideo)
    }

    return [videos, selectedVideo, search, select]
}

export default useVideos