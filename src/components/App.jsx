import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import css from './Statistics/Statistics.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = event => {
    const value = event.currentTarget.value;
    // console.log(value);

    this.setState(prev => {
      return { [value]: prev[value] + 1 };
    });

    // const currentButtonAtribute = event.currentTarget.getAttribute('data');
    // // console.log(currentButtonAtribute);
    // // console.log(Object.keys(this.state));
    // this.setState(prev => ({
    //   [currentButtonAtribute]: prev[currentButtonAtribute] + 1,
    // }));
  };

  countTotalFeedback = () => {
    // let total = this.state.good + this.state.neutral + this.state.bad;
    // return total;

    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return;
    }
    let percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return `${percentage}%`;
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave the feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleButtonClick={this.handleButtonClick}
          />

          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
