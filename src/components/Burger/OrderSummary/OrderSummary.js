import React, { Component } from 'react'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

// This could be a functional component, it doesn't have to be a class.
// The only reason it is a class is for the console.log on componentWillUpdate.
// Without a class you can not use things like componentWillUpdate.
class OrderSummary extends Component {

  componentWillUpdate() {
    // console.log('[OrderSummary] WillUpdate')
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span 
              style={{textTransform: 'capitalize'}}
            >
              {igKey}
            </span>: {this.props.ingredients[igKey]}
          </li>
        )
      })

    return (
      <Auxiliary>
        <h3>Your order</h3>
        <p>Delicious burger with the following ingredients:</p>

        <ul>
          {ingredientSummary}
        </ul>

        <p><strong>Total price: ${this.props.price.toFixed(2)}</strong></p>

        <p>Continue to checkout?</p>

        <Button
          btnType="Danger"
          clicked={this.props.purchaseCancelled}
        >
          Cancel
        </Button>

        <Button
          btnType="Success"
          clicked={this.props.purchaseContinued}
        >
          Continue
        </Button>
      </Auxiliary>
    )
  }
}

export default OrderSummary
