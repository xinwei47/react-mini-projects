import Ingredients from '../Ingredients/Ingredients';
import classes from './Meal.module.css';

const Meal = (props) => {
  return (
    <section className={classes.meal} id="meal">
      <h2 className="meal__heading heading--2">{props.meal.strMeal}</h2>
      <div className={classes['meal__img-container']}>
        <img
          src={props.meal.strMealThumb}
          alt=""
          className={classes['meal__img']}
        />
      </div>
      <div className={classes['meal__summary']}>
        <p>{props.meal.strCategory}</p>
        <p>{props.meal.strArea}</p>
      </div>
      <div className={classes['meal__instructions']}>
        {props.meal.strInstructions}
      </div>
      <h3 className="heading--3">Ingredients</h3>
      <Ingredients ingredients={props.ingredients} />
    </section>
  );
};

export default Meal;
