import React from 'react'

import classes from './Toolbar.css'

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
// import Logo from '../../Logo/Logo'
// import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
  <header 
    className={classes.Toolbar}
  >
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <p><strong>Herbert's Burgers</strong></p>
      {/* <Logo /> */}
    </div>

    <nav className={classes.DesktopOnly}>
      {/* <NavigationItems /> */}
    </nav>
  </header>
)

export default toolbar
