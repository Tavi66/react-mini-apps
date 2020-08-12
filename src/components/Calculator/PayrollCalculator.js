import React, {Component} from 'react';
import axios from 'axios';
import classes from './Calculator.module.css';

const port = process.env.PORT  || 5000;

const DisplayPayroll = (props) => {
    const info = props.payroll;

    const inputs = 
         <tr>
            <td>
                <input type="number" name="Invoice"
                onChange = {props.changeHandler}/>
            </td>
            <td>
                <input type="date" name="Date"
                onChange = {props.changeHandler}/>
            </td>
            <td>
                <input type="number" name="Parts"
                onChange = {props.changeHandler}/>
            </td>
            <td>
                <input type="number" name="Labor"
                onChange = {props.changeHandler}/>
            </td>       
            <td>
                <button 
                onClick={() => window.alert('backend not functioning at the moment...')}
                // onClick={props.setNewRecord}
               >
                    Add
                </button>
            </td>
         </tr>

    const items = info !== undefined ? info.map(element => {
        let total = 0;
        total += parseFloat(element.Labor);
        total += parseFloat(element.Parts);

        return(<tr key={element.Invoice}>
            <td>
                {element.Invoice}
            </td>
            <td>
                {element.Date}
            </td>
            <td>
                {element.Parts}
            </td>
            <td>
                {element.Labor}
            </td>       
            <td>
                {total.toFixed(2)}
            </td>          
            </tr>
        )
    }) : null;
    
    return(<div>
    <table className={classes.Table}>
        <thead>
            <tr className={classes.Row}>
             <th>Invoice</th>
             <th>Date</th>
             <th>Parts</th>
             <th>Labor</th>
             <th>Total</th>
            </tr>
        </thead>
        <tbody>
             {inputs}
             {items}
        </tbody>
    </table>
    </div>
    )
}

class PayrollCalculator extends Component {
    state = {
        baseUrl: `http://localhost:${port}/api/`,
        headers: {
            "Content-Type": "application/json"
          },
        commissionRate: 5.5,
        payroll: [],
            Invoice: '',
            Date: '',
            Parts: 0,
            Labor: 0,
    };
    
    setNewRecord = () => {
        const I = this.state.Invoice;
        const D = this.state.Date;
        const P = this.state.Parts;
        const L = this.state.Labor;

        const newRecord ={   
            Invoice: I,
            Date: D,
            Parts: P,
            Labor: L,
        }
        this.setState({newRecord: newRecord});

        const url = this.state.baseUrl.concat('payroll/add');
        
        //add new record into database
        axios.post(url, newRecord)
        .then(response => {
          console.log(response.data);
            console.log('Added new record!');  
            return response.data;  
          })
          .catch(error=>console.log('error: ',error)); 
        
          this.props.setRenderPayroll(true);
          //this.props.setPayroll(this.state.payroll);

        console.log('newRecord: ', newRecord);
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        let obj = {[name]: val};
        this.setState(obj);
        //console.log('obj: ', obj);
    }

    scrapePayroll = () => { 
        console.log('Scraping payroll...');
        const url = this.state.baseUrl.concat('payroll');
        const payroll = axios.get(url, this.state.headers)
        .then(response => {
          //console.log(response.data);
            console.log('payroll scraped!');  
            return response.data;  
          })
          .catch(error=>console.log('error: ',error)); 
    
        payroll.then(element => {
          console.log(element);
          this.setState({payroll:element});
          console.log('payroll saved to array!');
        });
        console.log('this.state.payroll: ',this.state.payroll)
      }
      
      componentDidMount = () => {
        //   if(this.props.reloadPayroll)
        //   {
        //       this.scrapePayroll();
        //       this.props.setPayroll(this.state.payroll);
        //   } else {
        //       this.setState({payroll: this.props.payrollSaved});
        //   }
      }
      componentWillUnmount = () => {
        //   this.props.setRenderPayroll(false);
        //   this.props.setPayroll(this.state.payroll);
        //   axios.get('/close');
      }

      componentDidUpdate = () => {
        //console.log('this.state.payroll (didUpdate): ',this.state.payroll)
      }
    render(){
        return(
            <div>
                <h3>*Not working yet*</h3>
                <DisplayPayroll 
                setNewRecord={this.setNewRecord}
                changeHandler={this.changeHandler}
                payroll={this.state.payroll}/>
            </div>
        )
    }
}

export default PayrollCalculator;