import React from 'react';
import { useGlobalContext } from '../contexts/context';

const Products = () => {
  const { dataProject } = useGlobalContext();
  return (
    <main>
      <section className='products__container'>
        <div className='products'>
          <h2>My Products</h2>
          <div className='products__form'>
            {dataProject.map((item) => {
              const { id, name, img, link } = item;
              return (
                <article key={id} className='products__item'>
                  <a href={link}>
                    <img src={img} alt={name} />
                    <footer>
                      <h5>{name}</h5>
                    </footer>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
