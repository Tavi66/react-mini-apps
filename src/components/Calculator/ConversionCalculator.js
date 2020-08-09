import React, {Component} from 'react';

import classes from './Calculator.module.css';
import navClasses from '../Navigation/Navigation.module.css';

import Convert from './Conversions';

const Navbar = (props) => {
    let style = {
        backgroundColor: 'gray',
        padding: '0px',
        position: 'relative',
        width: '100%'
    }
    return(
    <div className={navClasses.TopNav} style={style}>
        <ul className={navClasses.List}>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'area')}>
            Area
          </li>           
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'length')}>
            Distance/Length
          </li>          
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'force')}>
            Force
          </li>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'pressure')}>
            Pressure
          </li>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'temperature')}>
            Temperature
          </li>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'torque')}>
            Torque
          </li>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'vacuum')}>
            Vacuum
          </li>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'volume')}>
            Volume
          </li>
          <li className={navClasses.Item} onClick={(event)=>props.click(event,'weight')}>
            Weight
          </li>
         </ul>
    </div> 
    )

}

const DisplayConversion = (props) => {
    //console.log('props.info',props.info)
    const items = props.info.map(element => {
        let classI = classes.Item;

        return(
        <tr key={element.unit} onClick={(event) => props.clicked(event,element.unit)}>
            <td className={classI}>
                <input className={classes.UnitValue}
                type='number' 
                // placeholder={element.value} 
                value={element.value} 
                onChange={(event) => props.onValueChangeHandler(event, element.unit)}/>
                </td>
            <td className={classI}
            >{element.unit}</td>
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

const setConversionList = (listAll) => {
    //console.log('listAll',listAll);
    let list = listAll == null ? null : listAll.map(element => {
    return(
    <option key={element.unit} value={element.unit}>{element.unit}</option>
    );
    })
    return list;
}

class ConversionCalculator extends Component {
    state = {
    //    update: true,
    converting:[],
    convertTo:''
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
        console.log('newList',newList);

        this.setState({converting: newList});
        //this.converting = list;
        //console.log('this.state.converting', this.state.converting);
    }

    selectHandler = (event) => {
        this.setState({convertTo: event.target.value});
        //console.log('selected: ',event.target.value);
    };   

    unitClickHandler = (event, unit) => {
        this.setState({convertTo: unit});
        //console.log('selected: ',unit);

    }
    
    componentDidUpdate = () => {
        let updateFromProps = this.props.update;
        if(updateFromProps)
        {
            this.setState({converting: this.props.list});
            this.props.updating();
        }        
    }

    render()
    {

        let conversionList =  setConversionList(this.state.converting);
        return(<div>
            <Navbar click={this.props.click}/>
            {/* <button onClick={(event)=>this.props.click(event,'force')}>Force</button>
            <button onClick={(event)=>this.props.click(event,'length')}>Distance/Length</button> */}
            <DisplayConversion
            convertTo ={this.state.convertTo}
            info={this.state.converting} 
            onValueChangeHandler={this.onValueChangeHandler} 
            conversionList={conversionList}
            clicked={this.unitClickHandler}
            select={this.selectHandler}/>
    </div>);
    };
}

export default ConversionCalculator;