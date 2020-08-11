import React from 'react';
import classes from './Navigation.module.css';

const DropDownMenu = (props) => {
    return(
    <div className={classes.DropDownContent} >
        <ul className={classes.DropDownContent}>
          <li className={classes.Item} onClick={(event)=>props.click(event,'area')}>
            Area
          </li>           
          <li className={classes.Item} onClick={(event)=>props.click(event,'length')}>
            Distance/Length
          </li>          
          <li className={classes.Item} onClick={(event)=>props.click(event,'force')}>
            Force
          </li>
          <li className={classes.Item} onClick={(event)=>props.click(event,'pressure')}>
            Pressure
          </li>
          <li className={classes.Item} onClick={(event)=>props.click(event,'temperature')}>
            Temperature
          </li>
          <li className={classes.Item} onClick={(event)=>props.click(event,'torque')}>
            Torque
          </li>
          <li className={classes.Item} onClick={(event)=>props.click(event,'vacuum')}>
            Vacuum
          </li>
          <li className={classes.Item} onClick={(event)=>props.click(event,'volume')}>
            Volume
          </li>
          <li className={classes.Item} onClick={(event)=>props.click(event,'weight')}>
            Weight
          </li>
         </ul>
    </div> 
    )

}

const NavigationMenu = (props) => {
    let classNav = classes.DropDown + ' ' + classes.Item;

     let navbar =  
        <ul className={classes.List}>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'loan')}>
                Car Loan Calculator
            </li>
            <li className={classNav}            
            onClick={(event) => props.clicked(event,'convert')}
            >
                Conversion Calculator
                <DropDownMenu
                click={props.click}/>
            </li>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'scraper')}>
                Scraper
            </li>
            <li className={classes.Item} onClick={(event) => props.clicked(event,'todo')}>
                To-Do List
            </li>
        </ul>

    return(
    <div className={classes.Nav}>
        <div className={classes.TopNav}>
        {navbar}
        </div>
    </div>
    );
}

export default NavigationMenu;