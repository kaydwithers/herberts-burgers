import React from 'react'

import classes from './BuildControl.css'

const buildControl = ( props ) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      <p><strong>{props.label}</strong>{/* TODO  ${props.ingredientPrice}*/}</p>
    </div>

    <button 
      className={classes.Less}
      disabled={props.disabled}
      onClick={props.removed} 
    >
      -
    </button>

    {/* TODO
    <p>{ingredientQuantity}</p>
    */}

    <button 
      className={classes.More}
      onClick={props.added} 
    >
      +
    </button>
  </div>
)

export default buildControl
