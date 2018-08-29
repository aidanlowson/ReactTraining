import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css'

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key = {igKey + i} type={igKey} />
    }); //  Nested map returns the value of the props.
  })
    .reduce((arr, el) => {
      return arr.concat(el)
    },
    []);
    if (transformedIngredient.length === 0) {
      transformedIngredient = <p>Start adding ingredients!</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;