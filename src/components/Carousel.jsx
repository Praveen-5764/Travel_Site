import React, { useState, useEffect } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url:
      'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=2073&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=2070&q=80',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds (adjust the interval as needed)

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [slide]);

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8 transition-transform duration-300 ease-in-out transform hover:scale-110'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8 transition-transform duration-300 ease-in-out transform hover:scale-110'
      />
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={`${
            index === slide ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          } transition-opacity duration-500 ease-in-out`}
        >
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
