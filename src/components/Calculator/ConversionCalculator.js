import React, {Component} from 'react';

import classes from './Calculator.module.css';
import Units from './Units';

import Convert from './Conversions';

//Conversions not swapping correctly
//Inputs and labels become incorrect sometimes after swapping objects at indexes
const DisplayConversion = (props) => {
    let list = props.info;
    let options = list.map((element,index) => {
        return <option 
        key={element.unit + index}
        value={element.unit}>{element.unit}</option>;
    });
    //units in a table
    const items = list.map((element, index) => {
        let classI = classes.Item;
        let selectList =         
      <select value={props.selectedUnit.unit} 
      onChange={(event) => props.selectionHandler(event)}>
    {options}
    </select>
        return(
        <tr key={element.unit}>
            <td className={classI}>
                <input className={classes.UnitValue}
                type='number' 
                value={element.value > 0 ? element.value : ''} 
                onChange={(event) => props.onValueChangeHandler(event, element.unit)}/>
                </td>
            <td className={classI}>
                {index === 0  ? selectList : element.unit}
                </td>
        </tr>
        )
    })

    return (
    <table className={classes.Conversion}>
        <tbody>
            {items}
        </tbody>
    </table>
    );
}

const convertAll = (value, unit, list, type) => {
    //console.log('convertAll list', list, 'value', value, 'unit', unit)
    let newList = list;
        switch(type){
            case 'area': newList = Convert.convertArea(unit, value);
                break;
            case 'length': newList = Convert.convertDistance(unit,value);
                break; 
            case 'force': newList = Convert.convertForce(unit,value);
                break;
            case 'pressure': newList = Convert.convertPressure(unit,value);
                break;
            case 'temperature':newList = Convert.convertTemperature(unit,value);
                break;
            case 'torque': newList = Convert.convertTorque(unit,value);
                break;
            case 'vacuum':newList = Convert.convertVacuum(unit,value);
                break;
            case 'volume':newList = Convert.convertVolume(unit,value);
                break;
            case 'weight':newList = Convert.convertWeight(unit,value);
                break;
            default: ;   
        }
    return newList;
}

class ConversionCalculator extends Component {
    state = {
    //    update: true,
    converted: [],
    selected: {unit:'', value:0,index:0},
    swapIndex: 0,
    converting:[],
//    selectionList: [],
    convertTo:'',
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

    getList = () => {
        let list = null;
        switch(this.props.type)
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
        default: list = [];        
        };
        //console.log('list', list)
        return list;
    }

    swapObj = () => {
        const orig = this.state.converting[0];
        const selected = this.state.selected;

        let arr = [...this.state.converting];
        arr[0] = selected;
        arr[this.state.swapIndex] = orig;
        this.setState({converting: arr});
        this.setState({converted: arr});
    }

    setSwapIndex = (index) => {
        this.setState({swapIndex: index});
    }
    onValueChangeHandler = (event, unit) => {
        //this.setState({converting: this.props.list});
        const val = event.target.value;
        const index = this.state.converting.findIndex(e => {
            return e.unit === unit;
        });

        const item = {
            ...this.state.converting[index]
        };
        const list = [
            ...this.state.converting
        ]

        item.value = val;
        list[index] = item;

        let newList = convertAll(val,unit,list,this.props.type);
        
        let temp = newList[0];
        let swapIndex = this.state.swapIndex;
        newList[0] = newList[swapIndex];
        newList[swapIndex] = temp;

        //console.log('newList[swapIndex]',newList[swapIndex]);
        //console.log('newList',newList);

        this.setState({converted: newList});
        this.setState({converting: newList});
        //console.log('this.state.converting', this.state.converting);
    }

    selectionHandler = (event) => {
        let unit = event.target.value;
        let index = this.state.converting.findIndex(element => unit === element.unit);
        let value = index > 0 ? this.state.converted[index].value : 0;

        let selected = {unit: event.target.value, value: value, index: index};
        //console.log('selected (handler): ', unit, 'index (handler): ', index);
        this.setState({selected: selected});
        this.setSwapIndex(index);

        const orig = this.state.converting[0];

        let arr = [...this.state.converting];
        arr[0] = selected;
        arr[index] = orig;
        this.setState({converting: arr});
        //console.log('arr arr: ', arr);
        //console.log('converting arr: ', this.state.converting);

    }

    selectHandler = (event) => {
        this.setState({convertTo: event.target.value});
    };   

    unitClickHandler = (event, unit) => {
        this.setState({convertTo: unit});
        console.log('clicked unit: ',unit);

    }
    
    componentDidMount = () => {
        this.setState({converting: this.getList()});
        this.setState({converted: this.getList()});
    }
    componentDidUpdate = () => {
        let updateFromProps = this.props.update;
        if(updateFromProps)
        {
            this.setState({converting: this.getList()});
            this.props.updating();
        }        
        //  console.log('selected: ', this.state.selected);
        //  console.log('swapIndex: ', this.state.swapIndex);
        //  console.log('this.state.converting arr: ', this.state.converting);
    }

    render()
    {
        return(
        <div>
        <DisplayConversion
            swap={this.swapObj}
            swapIndex = {this.state.swapIndex}
            selectionHandler = {this.selectionHandler}
            selectedUnit = {this.state.selected}
            convertTo ={this.state.convertTo}
            info={this.state.converting} 
            onValueChangeHandler={this.onValueChangeHandler} 
            unitClickHandler={this.unitClickHandler}
            select={this.selectHandler}/>
        </div>
    );
    };
}

export default ConversionCalculator;