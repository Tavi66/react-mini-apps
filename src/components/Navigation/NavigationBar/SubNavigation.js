import React from 'react';
import classes from './Navigation.module.css';
import Logo from '../../Logo/Logo';
import SubNavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <SubNavigationItems />
        </nav>
    </header>
}

export default toolbar;