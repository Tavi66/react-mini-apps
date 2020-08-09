import React from 'react';
import classes from './Navigation.module.css';

const NavigationMenu = (props) => {
     let navbar =  
        <ul className={classes.List}>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'loan')}>
                Car Loan Calculator
            </li>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'convert')}>
                Conversion Calculator
            </li>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'scraper')}>
                Scraper
            </li>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'todo')}>
                To-Do List
            </li>
        </ul>

    return(
    <div className={classes.Nav}>
        <div className={classes.TopNav}>
        {navbar}
        </div>
    </div>
    );
}

export default NavigationMenu;