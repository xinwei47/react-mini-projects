import Stats from '../UI/Stats/Stats';
import classes from './Balance.module.css';

const Balance = (props) => {
  return (
    <Stats
      statsClassName={classes.balance}
      statsHeadingClassName={classes.balance__heading}
      statsDataClassName={classes.balance__amt}
      data={props.balance}
    >
      Balance
    </Stats>
  );
};

export default Balance;
