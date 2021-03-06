import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.5,
    cheese: 0.4,
    meat: 1.3
}
//stateful component
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...};
    // }

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchaseMode: false,
    }

    //Displays order summary modal if checkout button is clicked. Toggles purchaseMode. 
    purchaseHandler = () => {
        this.setState({purchaseMode: true});
    }
    //Continue purchase state
    purchaseContinueHandler = () => {
        alert('You continued!');
    }    
    //Cancel purchase state
    purchaseCancelHandler = () => {
        this.setState({purchaseMode: false});
    }
    //Update purchase state to disable/ or enable checkout button
    updatePurchaseState (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // }

        const sum = Object.keys(ingredients)
          .map(iKey => {
              return ingredients[iKey];
          })
          .reduce((sum, element) => {
              return sum + element;
          },0);

          this.setState({purchasable: sum > 0});
    }
    //Add ingredient to burger and update ingredient state
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {return;}
            
        const updatedCount = oldCount - 1;
        let updatedIngredients = {
          ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });    
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
        <Aux>
            <p></p>
            <Modal 
            show={this.state.purchaseMode}
            modalClosed={this.purchaseCancelHandler}
            >
                <OrderSummary 
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.state.totalPrice}
                />
            </Modal>
            {/* Display burger ingredients */}
            <Burger ingredients={this.state.ingredients} />
            {/* Display burger build and checkout controls */}
            <BuildControls  
            addIngredient = {this.addIngredient}
            removeIngredient = {this.removeIngredient}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            />
        </Aux>
        )
    }
}

export default BurgerBuilder;