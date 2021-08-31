import React from 'react';
import Loading from '../../../components/loading/Loading';
import { useGlobalContext } from '../../../contexts/context';
import Tour from './Tour';

const ToursApp = () => {
  const { loading, dataTours, fetchToursData } = useGlobalContext();

  if (dataTours.length === 0)
    return (
      <section className='tours__main'>
        <div className='tours__container'>
          <div className='title'>
            <h3>Our Tours</h3>
            <div className='underline' />
            {loading ? (
              <Loading />
            ) : (
              <button className='btn' onClick={fetchToursData}>
                refresh
              </button>
            )}
          </div>
        </div>
      </section>
    );
  return (
    <section className='tours__main'>
      <div className='tours__container'>
        <div className='title'>
          <h3>Our Tours</h3>
          <div className='underline' />
          {dataTours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ToursApp;
