import { useState } from 'react';
import Button from './components/UI/Button/Button';
import SearchForm from './components/Form/SearchForm';
import Meals from './components/Meals/Meals';
import Meal from './components/Meals/Meal';
import axios from 'axios';

import classes from './App.module.css';

const App = () => {
  const [mealsFound, setMealsFound] = useState(false);
  const [meals, setMeals] = useState([]);
  const [term, setTerm] = useState('');
  const [meal, setMeal] = useState();
  const [showMeal, setShowMeal] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const getRandomMealHandler = async () => {
    setMealsFound(false);
    const res = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const meal = res.data.meals[0];
    setMeal(meal);
    setShowMeal(true);
  };

  const resultsHandler = (res) => {
    const meals = res.data.meals;
    if (meals.length > 0) {
      setShowMeal(false);
      setMeals(meals);
      setMealsFound(true);
    }
  };

  const searchTermHandler = (term) => {
    setTerm(term);
  };

  const mealClickedHandler = (meal) => {
    const ingArr = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingArr.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
      }
    }
    setMeal(meal);
    setShowMeal(true);
    setIngredients(ingArr);
  };

  return (
    <>
      <h1 className='heading--1'>Recipe Finder</h1>
      <section className={classes.search}>
        <SearchForm
          link='https://www.themealdb.com/api/json/v1/1/search.php?s='
          onResults={resultsHandler}
          onSearchTerm={searchTermHandler}
        />
        <Button type='button' onClick={getRandomMealHandler}>
          Shuffle
        </Button>
      </section>

      {mealsFound && (
        <section className={classes['results-container']}>
          <h2 className='heading--2'>Search Results for "{term}"</h2>
          <Meals
            className='meals-gallery'
            data={meals}
            onLinkClicked={mealClickedHandler}
          />
        </section>
      )}

      {showMeal && <Meal meal={meal} ingredients={ingredients} />}
    </>
  );
};

export default App;
