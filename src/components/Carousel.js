import Carousel from "framer-motion-carousel";
import CarouselImg from './CarouselImg';
import React from 'react';

export default function MyCarousel({images}) {
  return (
    <div>
        <Carousel autoPlay = {false}>
            { images.map(src => <CarouselImg img_src = {src}/>) }
        </Carousel>
    </div>
  );
}
