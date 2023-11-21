import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import firstImage from '../images/metapics-9890.JPG';
import secondImage from '../images/metapics-9892.JPG';
import thirdImage from '../images/metapics-9906.JPG';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '500px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdImage}
          alt="Third slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
