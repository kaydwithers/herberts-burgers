import React, { Component } from 'react'

import classes from './Layout.css'
import Auxiliary from '../Auxiliary/Auxiliary'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState( {showSideDrawer: false} )
  }

  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => { 
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render () {
    return (
      <Auxiliary>
        <Toolbar 
          drawerToggleClicked={this.sideDrawerToggleHandler} 
        />
        <SideDrawer 
          closed={this.sideDrawerClosedHandler} 
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>
          <h1>Build + Order</h1>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }

}

export default Layout
