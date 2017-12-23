import React, { Component } from 'react'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Modal.css'

class Modal extends Component {

  // Only update OrderSummary if the show prop changes.
  // This is good for performance as we don't unnecessarily update OrderSummary.
  shouldComponentUpdate( nextProps, nextState ) {
    return nextProps.show !== this.props.show
  }

  render () {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
          className={classes.Modal}
          style={{
            opacity: this.props.show ? '1' : '0',
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    )
  }

}

export default Modal
