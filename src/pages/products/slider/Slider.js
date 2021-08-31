import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../../contexts/context';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Slider = () => {
  const { dataPeople } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const lastIndex = dataPeople.length - 1;
  if (index < 0) setIndex(lastIndex);
  else if (index > lastIndex) setIndex(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <main className='slider'>
      <div className='title'>
        <h3>
          <span>/</span>reviews
        </h3>
        <div className='underline' />
      </div>
      <div className='slider__container'>
        <div className='slider__center'>
          {dataPeople.map((person) => {
            const { id, name, image, title, quote } = person;
            let position = 'nextSlide';
            if (index === id - 1) position = 'activeSlide';
            else if (id === index || (index === 0 && id === dataPeople.length))
              position = 'lastSlide';

            return (
              <article key={id} className={position}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <h5>{title}</h5>
                <p>{quote}</p>
                <FaQuoteRight className='slider__icons' />
              </article>
            );
          })}
          <button
            className='slider__btn--prev'
            onClick={() => setIndex(index - 1)}
          >
            <FiChevronLeft />
          </button>
          <button
            className='slider__btn--next'
            onClick={() => setIndex(index + 1)}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Slider;
