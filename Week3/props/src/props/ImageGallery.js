import React from 'react'


const ImageGallery = ({images}) => {
  return (
    <div className='image-gallery'>
      {images?.map((image,index)=>(
        <div key={index} className='image-container'>
            <h2>{image.heading}</h2>
            <p>{image.paragrah}</p>
            <img src={image.imagePath} />
            <button className='button'>Explore More</button>
    </div>
       ))}
       </div>
  )
}

export default ImageGallery
