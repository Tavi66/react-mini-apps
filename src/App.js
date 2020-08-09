import React, {Component} from 'react';
import './App.css';

import LoanCalculator from './components/Calculator/LoanCalculator';
import MonthlyPayment from './components/Calculator/MonthlyPayment';
import ConversionCalculator from './components/Calculator/ConversionCalculator';
import Navigation from './components/Navigation/Navigation';
import Units from './components/Calculator/Units';
import Scraper from './components/Scraper/Scraper';
import ToDoList from './components/ToDoList/ToDoList';

class App extends Component{

  state = {
    displayApp:'',
    updateList: true,
    list: [],
    principal: 0,
    interest:0,
    loanPeriod: 0,
    conversionType: 'force',
    convertTo: '',
    conversions: Units.unitsAll(),
    area: Units.area(),    
    length: Units.length(),
    force:Units.force(),
    pressure:Units.pressure(),
    temperature:Units.temperature(),
    torque:Units.torque(),
    vacuum:Units.vacuum(),
    volume:Units.volume(),
    weight:Units.weight()
  }
  updateSelection = () => {
    this.setState({updateList: !this.state.updateList});
  }
  
  setConversionHandler = (event,unit) => {
    this.setState({conversionType: unit});
    this.setState({updateList: true});
    let list = this.getList(unit);
    this.setState({list: list});
  }
  
  showComponentHandler = (event, item) => {
    this.setState({displayApp: item})
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

  getList = (type) => {
    let list = null;
    switch(type)
{
    case 'area': 
      list = this.state.area;
    break;
    case 'length': 
      list = this.state.length;
    break; 
    case 'force': 
      list = this.state.force;
    break;
    case 'pressure':
      list = this.state.pressure;
    break;
    case 'temperature':
      list = this.state.temperature;
    break;
    case 'torque':
      list = this.state.torque;
    break;
    case 'vacuum':
      list = this.state.vacuum;
    break;
    case 'volume':
      list = this.state.volume;
    break;
    case 'weight':
      list = this.state.weight;
    break;
    default: ;        
    };
    console.log('list', list)
    return list;
}

     render()
  { 
    let mainComponent = null;
    switch(this.state.displayApp){
      case 'loan': 
        mainComponent =
        <div>
        <h3>Car Loan Calculator</h3>
        <LoanCalculator 
          amountChanged={this.loanAmountOnChange}
          interestChanged={this.interestOnChange}
          loanTermChanged={this.loanTermOnChange}/>
        <MonthlyPayment 
          principal={this.state.principal}
          interest={this.state.interest}
          loanPeriod={this.state.loanPeriod}/>
        </div>;
      break;
      case 'convert':
        mainComponent = <ConversionCalculator 
        update = {this.state.updateList}
        updating = {this.updateSelection}
        click = {this.setConversionHandler}
        type={this.state.conversionType}
        list={this.state.list}
        />;
      break;
      case 'scraper':
        mainComponent = <Scraper />;
      break;
      case 'todo':
        mainComponent = <ToDoList />;
      break;      
      default: ;
    }

    return (
    <div className="App">
      <Navigation
      clicked={this.showComponentHandler}/>
      {mainComponent}
    </div>
     );
  }
}

export default App;
