import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div className={css['statistics-wraper']}>
      <p className={css['list-name']}>Statistics</p>
      <span className={css.item}>Good: {good}</span>
      <span className={css.item}>Neutral: {neutral}</span>
      <span className={css.item}>Bad: {bad}</span>
      <span className={css.item}>Total: {countTotalFeedback}</span>
      {countPositiveFeedbackPercentage ? (
        <span className={css.item}>
          Positive feedback: {countPositiveFeedbackPercentage}
        </span>
      ) : (
        <span className={css.item}>Positive feedback:</span>
      )}
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.string,
};
