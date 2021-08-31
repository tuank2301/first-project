import React from 'react';
import { useGlobalContext } from '../../../contexts/context';
import Question from './Question';

const AccordionApp = () => {
  const { dataQuestions } = useGlobalContext();

  return (
    <main className='accordion'>
      <div className='accordion__container'>
        <div className='accordion__info--left'>
          <h2>Questions And Answers About Login</h2>
        </div>
        <div className='accordion__info--right'>
          {dataQuestions.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default AccordionApp;
