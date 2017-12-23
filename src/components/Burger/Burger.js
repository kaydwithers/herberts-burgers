import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

  // Transform an object of key value pairs into an array of burger ingredients.
  // The value of object is important to decide on how many ingredients.
  // The key is important for which type of ingredient.
  let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
      return [...Array( props.ingredients[igKey] )]
        .map( ( _, i ) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        } )
    } )
    // .reduce transforms an array into something else.
    .reduce( ( arr, el ) => {
      return arr.concat(el)
    }, [] )

    if ( transformedIngredients.length === 0 ) {
      transformedIngredients = <p>Add some ingredients.</p>
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
