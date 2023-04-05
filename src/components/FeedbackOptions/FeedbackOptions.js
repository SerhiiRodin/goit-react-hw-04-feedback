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

//   return (
//     <div className={css['button-wraper']}>
//       <button type="button" data="good" onClick={handleButtonClick}>
//         Good
//       </button>
//       <button type="button" data="neutral" onClick={handleButtonClick}>
//         Neutral
//       </button>
//       <button type="button" data="bad" onClick={handleButtonClick}>
//         Bad
//       </button>
//     </div>
//   );
