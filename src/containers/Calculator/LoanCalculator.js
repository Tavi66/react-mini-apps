import React, {Component} from 'react';
import MonthlyPayment from './MonthlyPayment';

const DisplayCalculator = (props) => {
    return(<div>
        Loan Amount ($): <input type='number' onChange={props.amountChanged}/> <br/>
        Interest (%): <input type='number' onChange={props.interestChanged}/> <br/>
        Loan Term (months): <input type='number' onChange={props.loanTermChanged}/>
    </div>)
}

class LoanCalculator extends Component {
    state ={
        principal: 0,
        interest:0,
        loanPeriod: 0,
    }
    loanAmountHandler = (newAmount) => {
        this.setState({principal: newAmount});
        //console.log('$',newAmount);
      }
    
      interestHandler = (newInterest) => {
        this.setState({interest: newInterest});
        //console.log(newInterest)
      }
    
      loanTermHandler = (newPeriod) => {
        this.setState({loanPeriod: newPeriod});
        //console.log(newPeriod, 'months');
      }
    
      loanAmountOnChange = (event) => {
        const newAmount = event.target.value;
        this.loanAmountHandler(newAmount);
      }
    
      interestOnChange = (event) => {
        const newInterest = event.target.value*0.01;
        this.interestHandler(newInterest);
      }
    
      loanTermOnChange = (event) => {
        const newPeriod = event.target.value;
        this.loanTermHandler(newPeriod);
      }    

    render(){
    return(
        <div>
        <h3>Loan Calculator</h3>
        <DisplayCalculator
          amountChanged={this.loanAmountOnChange}
          interestChanged={this.interestOnChange}
          loanTermChanged={this.loanTermOnChange}
          />
        <MonthlyPayment 
          principal={this.state.principal}
          interest={this.state.interest}
          loanPeriod={this.state.loanPeriod}/>
    </div>
    )
}
}

export default LoanCalculator;