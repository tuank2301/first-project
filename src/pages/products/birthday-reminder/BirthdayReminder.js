import React from 'react';
import { useGlobalContext } from '../../../contexts/context';
import List from './List';

const BirthdayReminder = () => {
  const { dataBirthday, clearAll } = useGlobalContext();
  return (
    <section className='birthday'>
      <div className='birthday__container'>
        <h3>{dataBirthday.length} Birthdays today</h3>
        <List />
        <button className='birthday__btn--clear' onClick={clearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
};

export default BirthdayReminder;
