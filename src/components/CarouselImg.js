import React from 'react';

export default function CarouselImg({img_src}) {
  return (
    <img
      draggable="false"
      src={img_src}
      key={0}
      width="100%"
      alt=""
    />
  );
}
