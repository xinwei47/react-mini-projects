import Stats from '../UI/Stats/Stats';
import classes from './StatsSummary.module.css';

const StatsSummary = (props) => {
  return (
    <div className={classes['stats-container']}>
      <Stats
        statsClassName={classes.income}
        statsHeadingClassName={classes.income__heading}
        statsDataClassName={classes.income__amt}
        data={`$${props.income}`}
      >
        Income
      </Stats>

      <Stats
        statsClassName={classes.expense}
        statsHeadingClassName={classes.expense__heading}
        statsDataClassName={classes.expense__amt}
        data={`$${props.expense}`}
      >
        Expense
      </Stats>
    </div>
  );
};

export default StatsSummary;
