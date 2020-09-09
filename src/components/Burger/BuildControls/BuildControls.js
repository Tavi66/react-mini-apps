import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
    const price = props.price.toFixed(2);
    return(
    <div className={classes.BuildControls}>
        Price: ${price}
        {controls.map(control => {
            return <BuildControl 
            key={control.label} 
            label={control.label}
            addIngredientHandler = {() => props.addIngredient(control.type)}
            removeIngredientHandler = {() => props.removeIngredient(control.type)}
            disabled={props.disabled[control.type]}
            />;
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
    )
}

export default buildControls;