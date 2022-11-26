import React from 'react'

interface AppProps {
    images: any;
}

const Gallery = (props : AppProps) => {
    const {images} = props
   return (
      <div className="grid grid-cols-2 md:grid-cols-3">
         {images.map((image : any, index: number) => {
            return (
               <div className="m-2 border rounded border-gold-200" key={index}>
                  <img src={image} alt="gallery" className="w-full rounded"/>
               </div>
            )
         })}         
      </div>
   )
}

export default Gallery