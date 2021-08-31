import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <div className='question__title'>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
