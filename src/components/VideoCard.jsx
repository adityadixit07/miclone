import React from 'react'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import '../styles/videosCard.css'

const VideoCard = ({name,image,index}) => {
  return (
    <div className='videoCard'style={{backgroundImage:`url(${image})`}}>
        <a href="/"><AiOutlinePlayCircle/></a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard