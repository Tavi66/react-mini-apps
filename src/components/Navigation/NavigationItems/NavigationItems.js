import React from 'react';
import classes from './NavigationItems.module.css';

import SubNavigationItem from './NavigationItem/NavigationItem';

const subNavigationItems = () => {
    return(
    <ul className={classes.SubNavigationItems}> 
    {/* active="true" */}
        <SubNavigationItem link="/" >Burger Builder</SubNavigationItem>
        <SubNavigationItem link="/">Checkout</SubNavigationItem>
    </ul>
    )
}

export default subNavigationItems;