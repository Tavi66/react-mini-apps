import React, {Component} from 'react';
import './App.css';

import LoanCalculator from './components/Calculator/LoanCalculator';
import ConversionCalculator from './components/Calculator/ConversionCalculator';
import Navigation from './components/Navigation/Navigation';
import Units from './components/Calculator/Units';
import Scraper from './components/Scraper/Scraper';
import ToDoList from './components/ToDoList/ToDoList';

class App extends Component{

  state = {
    displayApp:'',
    updateList: true,
    conversionType: 'force',
    convertTo: '',
    conversions: Units.unitsAll(),
  }
  updateSelection = () => {
    this.setState({updateList: !this.state.updateList});
  }
  
  setConversionHandler = (event,unit) => {
    this.setState({conversionType: unit});
    this.setState({updateList: true});
  }

  showComponentHandler = (event, item) => {
    this.setState({displayApp: item})
  }
    
  render()
  { 
    let mainComponent = null;
    switch(this.state.displayApp){
      case 'loan': 
        mainComponent = <LoanCalculator />;
      break;
      case 'convert':
        mainComponent = <ConversionCalculator 
        update = {this.state.updateList}
        updating = {this.updateSelection}
        type={this.state.conversionType}
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
      click = {this.setConversionHandler}
      clicked={this.showComponentHandler}/>
      {mainComponent}
    </div>
     );
  }
}

export default App;
