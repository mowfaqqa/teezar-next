import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlFor } from "../../lib/sanityConfig";

type Data = any;
interface Item {
  name: string;
  image: any;
}

const CenterMode: FC<Data> = ({ data }: Data) => {
  

  var settings = {
    dots: true,
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 2000,
    centerPadding: "60px",
    slidesToShow: 3,
  
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

  return (
    <div className="overflow-hidden my-4 border shadow-lg">
      <Slider {...settings} className="my-8 p-2">
        {data.map((item: Item) => {
          const src = urlFor(item.image).url();
          return (
            <div key={item.name}>
            <div
              
              className="bg-[#f2f2f2] p-2 mx-5 shadow-inner h-[45vh] md:h-[70vh] w-[90%] md:w-full relative"
            >
              <Image loader={()=>src}
                src={src} unoptimized
                layout="fill"
                objectFit="contain"
                alt="sample"
                className="mx-auto relative "
              />
              </div>
            </div>
            
          );
        })}
      </Slider>
    </div>
  );
};

export default CenterMode;

const Img = styled.img`
  width: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
