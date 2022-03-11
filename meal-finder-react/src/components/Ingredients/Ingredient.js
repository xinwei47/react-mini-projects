import classes from './Ingredient.module.css';

const Ingredient = (props) => {
  return <span className={classes.ingredient}>{props.ingredient}</span>;
};

export default Ingredient;
