import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
     <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      <div className="toolbar__logo">
        <a href="/">VENTIUM</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Pagina Principal</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
          <a href="/About">About</a>
        </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar