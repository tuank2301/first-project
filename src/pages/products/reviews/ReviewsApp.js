import React from 'react';
import { useGlobalContext } from '../../../contexts/context';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const ReviewsApp = () => {
  const {
    dataReviews,
    reviewsPrevPerson,
    reviewsNextPerson,
    reviewsRandomPerson,
    index,
  } = useGlobalContext();

  const { id, name, job, image, text } = dataReviews[index];

  return (
    <section className='reviews'>
      <div className='reviews__container'>
        <div className='title'>
          <h3>Our Reviews</h3>
          <div className='underline' />
        </div>
        <article key={id} className='reviews--person'>
          <div className='reviews__image'>
            <img src={image} alt={name} className='reviews__image--person' />
            <span className='reviews__icons-quote'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='reviews--author'>{name}</h4>
          <p className='reviews--job'>{job}</p>
          <p className='reviews--info'>{text}</p>
          <div>
            <button className='prev-btn' onClick={reviewsPrevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={reviewsNextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick={reviewsRandomPerson}>
            surprise me
          </button>
        </article>
      </div>
    </section>
  );
};

export default ReviewsApp;
