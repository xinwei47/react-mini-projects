import Stats from '../UI/Stats/Stats';
import classes from './StatsSummary.module.css';

const StatsSummary = () => {
  return (
    <div className={classes['stats-container']}>
      <Stats
        statsClassName={classes.income}
        statsHeadingClassName={classes.income__heading}
        statsDataClassName={classes.income__amt}
        data="100"
      >
        Income
      </Stats>

      <Stats
        statsClassName={classes.expenes}
        statsHeadingClassName={classes.expenes__heading}
        statsDataClassName={classes.expenes__amt}
        data="-60"
      >
        Expense
      </Stats>
    </div>
  );
};

export default StatsSummary;
