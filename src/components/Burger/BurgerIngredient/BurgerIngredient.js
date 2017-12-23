import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {
  render () {
    let ingredient = null
    
    switch ( this.props.type ) {
      case ( 'bread-bottom' ):
        ingredient = <div className={classes.BreadBottom}></div>
        break
  
      case ( 'bread-top' ):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break
  
      case ( 'bacon' ):
        ingredient = <div className={classes.Bacon}></div>
        break
  
      case ( 'bbq' ):
        ingredient = <div className={classes.Bbq}></div>
        break

      case ( 'beetroot' ):
        ingredient = <div className={classes.Beetroot}></div>
        break

      case ( 'mayo' ):
        ingredient = <div className={classes.Mayo}></div>
        break

      case ( 'meat' ):
        ingredient = <div className={classes.Meat}></div>
        break
  
      case ( 'mustard' ):
        ingredient = <div className={classes.Mustard}></div>
        break

      case ( 'cheese' ):
        ingredient = <div className={classes.Cheese}></div>
        break

      case ( 'egg' ):
        ingredient = <div className={classes.Egg}></div>
        break

      case ( 'lettuce' ):
        ingredient = <div className={classes.Lettuce}></div>
        break
  
      case ( 'pineapple' ):
        ingredient = <div className={classes.Pineapple}></div>
        break

      case ( 'relish' ):
        ingredient = <div className={classes.Relish}></div>
        break

      case ( 'tomato' ):
        ingredient = <div className={classes.Tomato}></div>
        break

      default: 
        ingredient = null
    }

    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
