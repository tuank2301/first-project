import React, { useState } from 'react';
import { useGlobalContext } from '../../../contexts/context';

const Tour = ({ id, name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);
  const { removeTour } = useGlobalContext();

  return (
    <div>
      <article className='tour__container'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour__info'>
            <h4>{name}</h4>
            <p className='tour__info--price'>${price}</p>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className='btn--read-more'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'show less' : 'read more'}
            </button>
          </p>
          <button className='btn--delete' onClick={() => removeTour(id)}>
            not interesting
          </button>
        </footer>
      </article>
    </div>
  );
};

export default Tour;
