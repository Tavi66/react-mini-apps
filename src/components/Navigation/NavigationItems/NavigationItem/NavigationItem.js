import React from 'react';
import classes from './NavigationItem.module.css';

const subNavigationItem = (props) => {
    return(<li className={classes.SubNavigationItem}>
        <a href={props.link}
        className={props.active ? classes.active : null}
        >{props.children}</a>
        </li>)
}

export default subNavigationItem;