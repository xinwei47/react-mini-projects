import classes from './Stats.module.css';

const Stats = (props) => {
  return (
    <div
      className={`${classes.stats} ${
        props.statsClassName ? props.statsClassName : ''
      }`}
    >
      <h2
        className={`${classes.stats__heading} ${
          props.statsHeadingClassName ? props.statsHeadingClassName : ''
        }`}
      >
        {props.children}
      </h2>
      <p
        className={`${classes.stats__data} ${
          props.statsDataClassName ? props.statsDataClassName : ''
        }`}
      >
        {props.data}
      </p>
    </div>
  );
};

export default Stats;
