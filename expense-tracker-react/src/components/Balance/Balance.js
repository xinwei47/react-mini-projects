import Stats from '../UI/Stats/Stats';
import classes from './Balance.module.css';

const Balance = () => {
  return (
    <Stats
      statsClassName={classes.balance}
      statsHeadingClassName={classes.balance__heading}
      statsDataClassName={classes.balance__amt}
      data="15"
    >
      Balance
    </Stats>
  );
};

export default Balance;
