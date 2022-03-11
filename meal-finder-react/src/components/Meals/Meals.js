import Card from '../UI/Card/Card';

import classes from './Meals.module.css';

const Meals = (props) => {
  return (
    <ul className={`${classes.gallery} ${props.className}`}>
      {props.data.map((meal, ind) => {
        return (
          <Card
            key={`meal-${ind}`}
            href="#meal"
            onLinkClicked={() => props.onLinkClicked(meal)}
            image={meal.strMealThumb}
            title={meal.strMeal}
          />
        );
      })}
    </ul>
  );
};

export default Meals;
