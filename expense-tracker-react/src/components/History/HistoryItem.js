import classes from './HistoryItem.module.css';

const HistoryItem = (props) => {
  return (
    <li className={classes.item}>
      <button
        className={classes.item__btn}
        type="button"
        onClick={props.onClick}
      >
        X
      </button>
      <p className={classes.item__name}>{props.text}</p>
      <p className={classes.item__amt}>
        {props.amt > 0 ? `+${props.amt}` : props.amt}
      </p>
      <div
        className={`${classes.item__mark} ${
          props.amt > 0 ? classes.green : classes.red
        }`}
      ></div>
    </li>
  );
};

export default HistoryItem;
