import Ingredient from './Ingredient';
import classes from './Ingredients.module.css';

const Ingredients = (props) => {
  return (
    <div className={classes.ingredients}>
      {props.ingredients.map((ingredient, ind) => {
        return <Ingredient key={`ingredient-${ind}`} ingredient={ingredient} />;
      })}
    </div>
  );
};

export default Ingredients;
