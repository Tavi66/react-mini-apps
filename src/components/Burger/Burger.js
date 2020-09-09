import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(iKey => {
        return[...Array(props.ingredients[iKey])].map((_,i) => {
            return <BurgerIngredient key={iKey+i} type={iKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients </p>;
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="breadTop" />
            {transformedIngredients}
            <BurgerIngredient type="breadBottom" />
        </div>
    );
}

export default burger;