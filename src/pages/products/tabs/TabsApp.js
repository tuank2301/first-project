import React from 'react';
import { useGlobalContext } from '../../../contexts/context';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Loading from '../../../components/loading/Loading';

const TabsApp = () => {
  const { dataTabs, loading, tabsValue, changeTabsValue } = useGlobalContext();

  const { company, dates, duties, title } = dataTabs[tabsValue] || {};
  console.log(dataTabs[tabsValue]);

  return (
    <main className='tabs'>
      <div className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline' />
        </div>
        {loading && <Loading />}
        <div className='tabs__container'>
          <div className='tabs__header'>
            {dataTabs?.map((item, index) => {
              const { company } = item;
              return (
                <button
                  key={index}
                  className={index === tabsValue ? 'active-btn' : undefined}
                  onClick={() => changeTabsValue(index)}
                >
                  {company}
                </button>
              );
            })}
          </div>
          <article className='tabs__info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='tabs__info--dates'>{dates}</p>
            {duties?.map((duty, index) => {
              return (
                <div key={index} className='tabs__info--duties'>
                  <FaAngleDoubleRight className='tabs__info--icons' />
                  <p key={index}>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </main>
  );
};

export default TabsApp;
