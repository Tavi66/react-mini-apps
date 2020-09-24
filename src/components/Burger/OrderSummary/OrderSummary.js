import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(iKey => 
    {
        return(
              <li key={iKey}>
                  <span style={ {textTransform:'capitalize'} }>{iKey}</span>: {props.ingredients[iKey]}
              </li>
        )}
    );

    return( <Aux>
        <h3>Your Order</h3>
        <p>Your ingredients:</p>
        <ul style={ {listStyle: 'none'}}>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button clicked={props.purchaseCancel} buttonType={'Danger'}>CANCEL</Button>
        <Button clicked={props.purchaseContinue} buttonType={'Success'}>CONTINUE</Button>
    </Aux>)
};

export default orderSummary;