import React, { useState } from 'react'
import ImageUpload from 'image-upload-react'
//important for getting nice style.
import 'image-upload-react/dist/index.css'
 
function ImageUploader() {
  const [imageSrc, setImageSrc] = useState()
 
  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }
 
  return (
    <ImageUpload
      handleImageSelect={handleImageSelect}
      imageSrc={imageSrc}
      setImageSrc={setImageSrc}
      style={{
        width: 125,
        height: 125,
        background: 'gold'
      }}
    />
  )
}
 
export default ImageUploader;