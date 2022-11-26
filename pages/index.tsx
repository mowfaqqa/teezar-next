import React from "react";
import CenterMode from "../components/carousel/Carousel";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import Link from "next/link";
import Head from "next/head";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Head>
        <title>Teezar_Fashion | NG</title>
      </Head>
      <div className="bg-home h-screen bg-cover shadow-lg">
        <HomeNav />
      </div>
      <div>
        <h3 className="font-dancing font-bold text-5xl py-4 text-center teezar">
          Teezar Fashion
        </h3>
      </div>
      <CenterMode />
      <div className="text-center my-8">
        <Link href="/products">
          <a className="bg-gold-100 hover:bg-gold-300 transition-all duration-300 py-2 px-8 text-white font-semibold rounded shadow-md">Shop Now</a>
        </Link>
      </div>
      <Category />
      <Gallery images={images} />
      <Footer/>
    </>
  );
};

export default Home;

const images = [
  "/products/gallery-1.png",
  "/products/gallery-2.png",
  "/products/gallery-3.png",
  "/products/gallery-4.png",
  "/products/gallery-5.png",
  "/products/gallery-6.png",
];
