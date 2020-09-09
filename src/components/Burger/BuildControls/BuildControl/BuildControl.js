import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button 
        onClick={props.removeIngredientHandler} 
        disabled={props.disabled}
        >Less</button>
        <button onClick={props.addIngredientHandler}>More</button>
    </div>
}

export default buildControl;