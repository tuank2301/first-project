import React from 'react';
import { useGlobalContext } from '../../../contexts/context';

const List = () => {
  const { dataBirthday } = useGlobalContext();
  return (
    <>
      {dataBirthday.map((item) => {
        const { id, name, age, image } = item;
        return (
          <article key={id} className='birthday--person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
