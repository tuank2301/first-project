import React from 'react';
import phone from '../assets/images/phone.svg';

const Home = () => {
  return (
    <main className='home'>
      <section className='home__container'>
        <article className='home__info'>
          <h1>
            Payments infrastructure
            <br /> for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </article>
        <article className='home__images'>
          <img src={phone} alt='phone' />
        </article>
      </section>
    </main>
  );
};

export default Home;
