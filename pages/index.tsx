import React, { ReactElement } from "react";
import Applayout from "../components/Applayout";
import CenterMode from "../components/carousel/Carousel";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div>
        <h3 className="font-dancing text-4xl mt-4 text-center">
          Teezar Fashion
        </h3>
      </div>
      <CenterMode />
      <div className="text-center my-8">
        <Link href="/allproducts" >
          <a className="bg-gold-100 py-2 px-8 text-white">Shop Now</a>
        </Link>
      </div>
      <Category />
      <Gallery images={images} />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Applayout>{page}</Applayout>;
};

const images = [
  "/products/gallery-1.png",
  "/products/gallery-2.png",
  "/products/gallery-3.png",
  "/products/gallery-4.png",
  "/products/gallery-5.png",
  "/products/gallery-6.png",
];
