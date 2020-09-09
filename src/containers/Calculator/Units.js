const unitsAll = () => {
    return(
        [
            'area', 
            'length', 
            'force',
            'pressure',
            'temperature',
            'torque',
            'vacuum',
            'volume',
            'weight'
        ]
    )
}

const area = () => {
    return(
        [
            {unit: 'Sq. Meters', value:0},
            {unit: 'Sq. Millimeters', value:0},
            {unit: 'Sq. Centimeters', value:0},
            {unit: 'Sq. Yards', value:0},
            {unit: 'Sq. Feet', value:0},
            {unit: 'Sq. Inches', value:0},
            {unit: 'Sq. Kilometers', value:0},
            {unit: 'Sq. Miles', value:0}      
        ]
    )
}

const length = () => {
    return(
        [
            {unit: 'Meters', value: 0},
            {unit: 'Millimeters', value:0},
            {unit: 'Centimeters', value:0},
            {unit: 'Yards', value:0},
            {unit: 'Feet', value:0},
            {unit: 'Inches', value:0},
            {unit: 'Kilometers', value:0},
            {unit: 'Miles', value:0}
        ]
    )
}

const force = () => {
    return(
        [
            {unit: 'Newtons', value: 0},
            {unit: 'Pounds', value: 0},
            {unit: 'Ounces', value: 0}  
        ]
    )
}

const pressure = () => {
    return([
            {unit: 'Bar', value: 0},
            {unit: 'Pascal', value: 0},
            {unit: 'kg/cm', value: 0},
            {unit: 'kPa', value: 0},  
            {unit: 'Atmospheres', value: 0},
            {unit: 'psi', value: 0},
            {unit: 'Millibar', value: 0}  
        ]
    )
}

const temperature = () => {
    return([
            {unit: 'Celsius', value: 0},
            {unit: 'Fahrenheit', value: 0},      
            {unit: 'Kelvin', value: 0}      
        ]
    )
}

const torque = () => {
    return([
            {unit: 'Newton Meters', value: 0},  
            {unit: 'Foot lbs', value: 0},  
            {unit: 'Inch lbs', value: 0},
            {unit: 'KG cm', value: 0},
            {unit: 'KG M', value: 0}      
        
        ]    
    )
}

const vacuum = () => {
    return(
        [
            {unit: 'Pascal', value: 0},
            {unit: 'kPa', value: 0},  
            {unit: 'In H2O', value: 0},
            {unit: 'In Hg', value: 0},
            {unit: 'Millibar', value: 0},        
            {unit: 'mm Hg', value: 0},
            {unit: 'Atmospheres', value: 0},
            {unit: 'KG/sq. cm.', value: 0},
            {unit: 'Bar', value: 0}
        ]
    )
}
const volume = () => {
    return(
        [
            {unit: 'Liters', value: 0},
            {unit: 'Fluid Ounces', value: 0},
            {unit: 'Quarts', value: 0},  
            {unit: 'Gallons', value: 0},
            {unit: 'Cu. Inches', value: 0},
            {unit: 'Cu. Centimeters', value: 0},
            {unit: 'Cu. Feet', value: 0},
            {unit: 'Cu. Yards', value: 0},
            {unit: 'Cu. Meters', value: 0}
        ]
    )
}
const weight = () => {
    return(
        [
            {unit: 'Kilograms', value: 0},
            {unit: 'Ounces', value: 0},
            {unit: 'Pounds', value: 0},
            {unit: 'English Tons', value: 0},
            {unit: 'Metric Tons', value: 0},
            {unit: 'Grams', value: 0}
        ]
    )
}

export default {
    unitsAll,
    area, 
    length, 
    force,
    pressure,
    temperature,
    torque,
    vacuum,
    volume,
    weight
};