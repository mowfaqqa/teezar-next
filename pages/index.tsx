import React, { FC } from "react";
import CenterMode from "../components/carousel/Carousel";
import Category from "../components/Category/Category";
import Gallery from "../components/Gallery/Gallery";
import Link from "next/link";
import Head from "next/head";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
import { Context } from "../context/Context";
import { client } from "../lib/sanityConfig";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Calendar } from "react-feather";

// interface Data{

// }

export const getStaticProps: GetStaticProps = async () => {
  const carouselQuery = '*[ _type == "carousel"]';
  const data = await client.fetch(carouselQuery);

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};

const Home: FC = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log('carousel', data);

  const handleClick = ()=>{
    
  }

  return (
    <Context>
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
      <CenterMode data={data} />
      <div className="w-[100%] h-fit py-10 md:py-16 bg-gradient-to-r from-gold-100 to-pink-800 bg-cover bg-center flex justify-center items-center">
        <div className="w-[60%] p-7 bg-white text-center">
          <h1 className="text-xl font-bold text-gold-100 mb-2 font-roboto">
            LET'S MAKE YOU THAT DRESS!!!
          </h1>
          <p className="text-lg">
            Trust{" "}
            <span className="font-dancing text-gold-100 text-xl">Teezar</span>{" "}
            when it comes to your dresses. We offer Custom Tailor made dresses
            based on your individual preference and specific measurements.{" "}
            <span className="font-bold block text-gold-100">
              By appointments only
            </span>
          </p>
          <button onClick={handleClick} className="flex mx-auto mt-4 gap-2 bg-gold-100 hover:bg-gold-300 transition-all duration-300 py-2 px-8 text-white font-semibold rounded shadow-md "><p>Book an Appointment</p> <Calendar size={20}/></button>
        </div>
      </div>
      <Category />
      <div className="text-center my-8">
        <Link href="/products">
          <a className="bg-gold-100 hover:bg-gold-300 transition-all duration-300 py-2 px-8 text-white font-semibold rounded shadow-md">
            Shop Now
          </a>
        </Link>
      </div>
      <Gallery images={images} />
      <Footer />
    </Context>
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
