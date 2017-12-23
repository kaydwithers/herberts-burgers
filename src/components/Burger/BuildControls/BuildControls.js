import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Beetroot', type: 'beetroot' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Egg', type: 'egg' },
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Meat', type: 'meat' },
  { label: 'Pineapple', type: 'pineapple' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Relish', type: 'relish' },
  { label: 'Mayo', type: 'mayo' },
  { label: 'Bbq', type: 'bbq' },
  { label: 'Mustard', type: 'mustard' },
]

const buildControls = ( props ) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label} 
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        price={props.ingredientPrice}
      />
    ))}
    <br />
    <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Order now <span role="img" aria-label="Thumbs Up">👍</span>
    </button>
  </div>
)

export default buildControls
