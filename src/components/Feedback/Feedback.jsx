import c from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={c.feedbackContainer}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positivePercentage}%</p>
  </div>
);

export default Feedback;
