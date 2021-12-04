import Carousel from "framer-motion-carousel"
import CarouselImg from './CarouselImg'
import React from 'react'

export default function MyCarousel({images}) {
  return (
    <div>
        <Carousel autoPlay = {false}>
            { images.map(src => <CarouselImg img_src = {`/home2/${src}`}/>) } // TODO update me when base url changes to /home
        </Carousel>
    </div>
  );
}
