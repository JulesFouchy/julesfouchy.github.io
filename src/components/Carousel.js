import Carousel from "framer-motion-carousel"
import CarouselImg from './CarouselImg'
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function MyCarousel({images}) {
  const {siteConfig} = useDocusaurusContext()
  return (
    <div>
        <Carousel autoPlay = {false}>
            { images.map(src => <CarouselImg img_src = {`${siteConfig.baseUrl}${src}`}/>) }
        </Carousel>
    </div>
  );
}
