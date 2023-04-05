// import { Component } from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import css from './Statistics/Statistics.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const handleButtonClick = event => {
    const value = event.currentTarget.value;
    // console.log(value);

    if (value === 'good') {
      setGood(prev => prev + 1);
      feedback.good = good + 1;
    }

    if (value === 'neutral') {
      setNeutral(prev => prev + 1);
      feedback.neutral = neutral + 1;
    }

    if (value === 'bad') {
      setBad(prev => prev + 1);
      feedback.bad = bad + 1;
    }
    // console.log(feedback);
  };

  const countTotalFeedback = () => {
    // let total = good + neutral + bad;
    // return total;

    return Object.values(feedback).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return;
    }
    let percentage = Math.round((good / countTotalFeedback()) * 100);

    return `${percentage}%`;
  };

  return (
    <div className={css.container}>
      <Section title="Please leave the feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          handleButtonClick={handleButtonClick}
        />

        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

//----------------Class-------------------------------------------------

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleButtonClick = event => {
//     const value = event.currentTarget.value;
//     console.log(value);

//     this.setState(prev => {
//       return { [value]: prev[value] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value);
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (this.state.good === 0) {
//       return;
//     }
//     let percentage = Math.round(
//       (this.state.good / this.countTotalFeedback()) * 100
//     );

//     return `${percentage}%`;
//   };

//   render() {
//     return (
//       <div className={css.container}>
//         <Section title="Please leave the feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             handleButtonClick={this.handleButtonClick}
//           />

//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               countTotalFeedback={this.countTotalFeedback()}
//               countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
