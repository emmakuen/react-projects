import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
    const renderedImages = props.images.map(({ description, id, urls } = {}) =>
        <ImageCard imageSrc={urls.regular} key={id} alt={description} />
    )

    return (
        <div className='image-list'>
            {renderedImages}
        </div>
    )
}

export default ImageList
