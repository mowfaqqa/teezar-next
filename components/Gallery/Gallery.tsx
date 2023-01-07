import React from 'react'
import Image from 'next/image'

interface AppProps {
    images: any;
}

const Gallery = (props : AppProps) => {
    const {images} = props
   return (
      <div className="grid grid-cols-2 md:grid-cols-6">
         {images.map((image : any, index: number) => {
            return (
               <div className="m-2 rounded" key={index}>
                  <Image src={image} alt="gallery" height={400} width={450}/>
               </div>
            )
         })}         
      </div>
   )
}

export default Gallery