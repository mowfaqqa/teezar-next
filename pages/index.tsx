import React, { ReactElement } from 'react'
import Applayout from '../components/Applayout';
import Category from '../components/Category/Category';
import Gallery from '../components/Gallery/Gallery';

const Home = () => {
  return (
    <>
    <div className="bg-[url('/products/background.png')] bg-cover bg-no-repeat h-[130vh] w-full" />
      <div>
        <h3 className='font-dancing text-4xl mt-4 text-center'>Teezar     Fashion </h3>
        </div>
      <Category />
      <Gallery images={images} />
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
    return <Applayout>{page}</Applayout>;
  };

  const images = [
    '/products/gallery-1.png',
    '/products/gallery-2.png',
    '/products/gallery-3.png',
    '/products/gallery-4.png',
    '/products/gallery-5.png',
    '/products/gallery-6.png',
  ]