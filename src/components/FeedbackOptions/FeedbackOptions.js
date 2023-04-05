import React from 'react';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, handleButtonClick }) {
  //   console.log(options);
  return (
    <div className={css['button-wraper']}>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            value={option}
            onClick={handleButtonClick}
            className={css.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
