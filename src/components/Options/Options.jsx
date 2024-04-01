import s from "./Options.module.css";

const Options = ({ options, updateFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.options}>
        {options.map((option) => (
          <li key={option} className={s.option}>
            <button className={s.button} onClick={() => updateFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
      {totalFeedback > 0 && (
        <button className={s.button} type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
