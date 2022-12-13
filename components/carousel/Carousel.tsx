import Image, { StaticImageData } from "next/image";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import items from "./carouselData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "../../lib/sanityConfig";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const carouselQuery = '*[ _type == "carousel"]';
  const carouselData = await client.fetch(carouselQuery);

  return {
    props: {
      carouselData,
    },
  };
};

function CenterMode({
  carouselData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(carouselData);

  var settings = {
    dots: true,
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 2000,
    centerPadding: "60px",
    slidesToShow: 3,
    // speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initiallSlide: 2,
        },
      },
    ],
  };

  type Item = {
    name: string | React.Key;
    img: StaticImageData;
  };

  return (
    <div className="overflow-hidden my-4 border shadow-lg">
      <Slider {...settings} className="my-8 p-2">
        {items.map((item: Item) => {
          return (
            <div
              key={item.name}
              className="bg-[#f2f2f2] p-2 mx-5 shadow-inner w-3/5 md:w-full"
            >
              <Image src={item.img} alt="sample" className="mx-auto" />
              <p className="text-center text-base md:text-xl font-roboto mt-2">
                {item.name}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CenterMode;

const Img = styled.img`
  width: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
