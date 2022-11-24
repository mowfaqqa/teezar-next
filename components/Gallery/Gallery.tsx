import React from 'react'
// import images from './galleryData'

interface AppProps {
    images: any;
}

const Gallery = (props : AppProps) => {
    const {images} = props
   return (
      <div className="grid grid-cols-2 md:grid-cols-3">
         {images.map((image : any, index: number) => {
            return (
               <div className="m-2" key={index}>
                  <img src={image} alt="gallery" className="w-full"/>
               </div>
            )
         })}         
      </div>
   )
}

export default Gallery