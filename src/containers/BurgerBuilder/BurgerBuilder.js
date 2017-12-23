import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  bacon: 0.75,
  bbq: 0,
  beetroot: 0.5,
  cheese: 1.25,
  egg: 2,
  lettuce: 0.75,
  mayo: 0,
  mustard: 0,
  meat: 1.25,
  pineapple: 2,
  relish: 0,
  tomato: 0.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      tomato: 0,
      pineapple: 0,
      lettuce: 0,
      beetroot: 0,
      egg: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      relish: 0,
      bbq: 0,
      mustard: 0,
      mayo: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState (ingredients) {
    // Sum up all the values of the ingredients.
    const sum = Object.keys( ingredients )
    // sum = ["lettuce", "bacon", "cheese", "meat"]
      .map(igKey => {
        // igKey = quantity number.
        return ingredients[igKey]
      })
      // ingredients = {lettuce: 0, bacon: 0, cheese: 0, meat: 0}
      // sum = [0, 0, 0, 0]
      
      // Get the sum of all ingredients.
      .reduce(( sum, el ) => {
        return sum + el
        // sum = ingredient array number. el = quantity.
        // sum 0 (lettuce), el = 0
        // sum 1 (bacon), el = 0
        // sum 2 (cheese), el = 0
        // sum 3 (meat), el = 0
      }, 
      // Start at 0.
      0)
      // sum = 0. Sum will increase when ingredients increase.

    // Return true or false depending on quantity.
    this.setState( {purchasable: sum > 0} )
  }

  // ingredientPrice = (type) => {
  //   const price = INGREDIENT_PRICES[type]
  // }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1

    // Create a new object of the ingredients you have in your state.
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = updatedCount

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({
      totalPrice: newPrice, 
      ingredients: updatedIngredients
    })

    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]

    if (oldCount <= 0) {
      return
    }

    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount

    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction

    this.setState({
      totalPrice: newPrice, 
      ingredients: updatedIngredients
    })

    this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler = () => {
    this.setState( {purchasing: true} )
  }

  purchaseCancelHandler = () => {
    this.setState( {purchasing: false} )
  }

  purchaseContinueHandler = () => {
    alert('Continue')
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }

    // {lettuce: true, meat: false} etc
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Auxiliary>
        <Modal 
          show={this.state.purchasing} 
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary 
            ingredients={this.state.ingredients} 
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>

        <Burger 
          ingredients={this.state.ingredients} 
        />

        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientPrice={this.ingredientPrice}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Auxiliary>
    )
  }
}

export default BurgerBuilder
