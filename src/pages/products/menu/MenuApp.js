import React from 'react';
import { useGlobalContext } from '../../../contexts/context';

const MenuApp = () => {
  const { dataMenuTemp, allCategories, selectCategory } = useGlobalContext();
  return (
    <main className='menu'>
      <div className='menu__container'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <div className='menu__categories'>
          {allCategories.map((item, index) => (
            <button key={index} onClick={() => selectCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <section className='menu__center'>
          {dataMenuTemp.map((item) => {
            const { id, title, price, img, desc } = item;
            return (
              <article className='menu__item' key={id}>
                <img src={img} alt={title} />
                <div className='menu__item--info'>
                  <header>
                    <h4>{title}</h4>
                    <p>${price}</p>
                  </header>
                  <p className='menu__item--desc'>{desc}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default MenuApp;
