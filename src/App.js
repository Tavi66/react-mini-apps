import React, {Component} from 'react';
import './App.css';

import LoanCalculator from './components/Calculator/LoanCalculator';
import ConversionCalculator from './components/Calculator/ConversionCalculator';
import Navigation, {SideNav} from './components/Navigation/Navigation';
import Units from './components/Calculator/Units';
import Scraper from './components/Scraper/Scraper';
import ToDoList from './components/ToDoList/ToDoList';
import PayrollCalculator from './components/Calculator/PayrollCalculator';

class App extends Component{

  state = {
    displayApp:'',
    updateList: true,
    conversionType: 'area',
    convertTo: '',
    conversions: Units.unitsAll(),
    payroll: [],
    reloadPayroll: true,
  }
  updateSelection = () => {
    this.setState({updateList: !this.state.updateList});
  }
  
  setPayroll = (payroll) => {
    this.setState({payroll:payroll});
    //this.setRenderPayroll(false);
  }

  setRenderPayroll = (val) => {
    this.setState({reloadPayroll:val});
  }

  // updatePayroll = (payroll, val) => {
  //   this.setState({payroll:payroll});
  //   this.setState({reloadPayroll:val});
  // }

  setConversionHandler = (event,unit) => {
    this.setState({conversionType: unit});
    this.setState({updateList: true});
    console.log(unit);
    console.log(event.target.className);
//    event.target.className = classes.ActiveTab;
    
  }

  showComponentHandler = (event, item) => {
    this.setState({displayApp: item})
    this.sideNavHandler();
  }

  showSideNav = () => {
        this.setState({style: {display:'block'}})
  }

  hideSideNav = () => {
        this.setState({style: {display:'none'}})
    
  }
  sideNavHandler = () => {
    if(this.state.displayApp === 'convert'){
      this.showSideNav();   
    } else this.hideSideNav();
  }
  render()
  { 
    let mainComponent = null;
    switch(this.state.displayApp){
      case 'payroll': 
        mainComponent = <PayrollCalculator 
        setPayroll={this.setPayroll}
        setRenderPayroll={this.setRenderPayroll}
        reloadPayroll={this.state.reloadPayroll}
        payrollSaved={this.state.payroll}
        />;
      break;      
      case 'loan': 
        mainComponent = <LoanCalculator />;
      break;
      case 'convert':
        mainComponent = <div>
        <SideNav  
        tab = {this.state.conversionType}     
         click={this.setConversionHandler}/>
        <ConversionCalculator 
         update = {this.state.updateList}
         updating = {this.updateSelection}
         type={this.state.conversionType}
         click = {this.setConversionHandler}
        />          
        </div>;
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
      appType={this.state.displayApp}
      click = {this.setConversionHandler}
      clicked={this.showComponentHandler}/>
      {mainComponent}
    </div>
     );
  }
}

export default App;
