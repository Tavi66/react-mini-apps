const convertVacuum = (initUnit, val) => {
    let at = val;
    switch(initUnit) {
        case 'Bar':
            at /= 1.013;
            break;
        case 'Pascal':
            at /= 101325.335;
            break;
        case 'mm Hg':
            at /= 759.94;
            break;
        case 'kPa':
            at /= 101.325;
            break;
        case 'In Hg':
            at /= 30.005;
            break;
        case 'In H2O':
            at /= 407.186;
            break;
        case 'Atmospheres':
            at = val;
            break;
        case 'KG/sq. cm.':
            at /= 1.033;
            break;
        case 'Millibar':
            at /= 1013.253;
            break;
        default: ;
    }

    const b = at * 1.013;
    const p = at * 101325.335;
    const kpa = at * 101.325;
    const mb = at * 1013.253;
    const mmhg = at * 759.94;
    const inhg = at * 30.005;
    const inh2o = at * 407.186;
    const kgsqcm = at * 1.033;
    
    return([
        {unit: 'Pascal', value: p},
        {unit: 'kPa', value: kpa},  
        {unit: 'In H2O', value: inh2o},
        {unit: 'In Hg', value: inhg},
        {unit: 'Millibar', value: mb},        
        {unit: 'mm Hg', value: mmhg},
        {unit: 'Atmospheres', value: at},
        {unit: 'KG/sq. cm.', value: kgsqcm},
        {unit: 'Bar', value: b}
])
}
const convertVolume = (initUnit, val) => {
    let oz = val;
    switch(initUnit){
        case 'Liters': ;
        break;
        case 'Fluid Ounces': oz = val;
        break;
        case 'Quarts': oz *= 32;
        break;
        case 'Gallons': oz *= 128;
        break;
        case 'Cu. Inches':  oz /= 1.804;
        break;
        case 'Cu. Centimeters': oz /= 29.565;
        break;
        case 'Cu. Feet': oz /= 0.0010453;
        break;
        case 'Cu. Yards': oz /= 0.00003868;
        break;
        case 'Cu. Meters': oz /= 0.0000296;
        break;
        default:;
    }
    const qt = oz / 32;
    const gal = oz / 128;
    const inc = oz * 1.804;
    const cmc = oz * 29.565;
    const ftc = oz * 0.0010453;
    const ydc = oz * 0.00003868;
    const mc = oz * 0.0000296;
    const l = oz * 0.0296;

    return([
        {unit: 'Liters', value: l},
        {unit: 'Fluid Ounces', value: oz},
        {unit: 'Quarts', value: qt},  
        {unit: 'Gallons', value: gal},
        {unit: 'Cu. Inches', value: inc},
        {unit: 'Cu. Centimeters', value: cmc},
        {unit: 'Cu. Feet', value: ftc},
        {unit: 'Cu. Yards', value: ydc},
        {unit: 'Cu. Meters', value: mc}
    ])
}
const convertWeight = (initUnit, val) => {
    let g = val;

    switch(initUnit){
        case 'Kilograms': g /= 0.001;
        break;
        case 'Ounces': g *= 28.34952;
        break;
        case 'Pounds': g *= 454;
        break;
        case 'English Tons': g /= 1.1023e-6;
        break;
        case 'Metric Tons': g /=  1e-6;
        break;
        case 'Grams': g = val;
        break;    
        default:;
    }
    const kg = g * 0.001;
    const oz = g / 28.34952;
    const lb = g / 454;
    const eton = g * 1.1023e-6;
    const mton = g * 1e-6;

    return([
        {unit: 'Kilograms', value: kg},
        {unit: 'Ounces', value: oz},
        {unit: 'Pounds', value: lb},
        {unit: 'English Tons', value: eton},
        {unit: 'Metric Tons', value: mton},
        {unit: 'Grams', value: g}
    ])
}

const convertPressure = (initUnit, val) => {
    //let b, p, kgcm,kpa,at,psi, mb = 0;
    let at = val;

    switch(initUnit) {
        case 'Bar':
            at /= 1.013;
            break;
        case 'Pascal':
            at /= 101325.335;
            break;
        case 'kg/cm':
            at /= 1.033;
            break;
        case 'kPa':
            at /= 101.325;
            break;
        case 'Atmospheres':
            at = val;
            break;
        case 'psi':
            at /= 14.696;
            break;
        case 'Millibar':
            at /= 1013.253;
            break;
        default: ;
    }

    const b = at * 1.013;
    const p = at * 101325.335;
    const kgcm = at * 1.033;
    const kpa = at * 101.325;
    const psi = at * 14.696;
    const mb = at * 1013.253;

    return([
        {unit: 'Bar', value: b},
        {unit: 'Pascal', value: p},
        {unit: 'kg/cm', value: kgcm},
        {unit: 'kPa', value: kpa},  
        {unit: 'Atmospheres', value: at},
        {unit: 'psi', value: psi},
        {unit: 'Millibar', value: mb}  

    ])
}

const convertTemperature = (initUnit, val) => {
    let k,c,f = 0;
    switch(initUnit){
        case 'Celsius':
        c = val;
        f = ((9/5)*c) + 32;
        k = c + 273;
        break;
        case 'Fahrenheit':
        f = val;
        c = (5/9)*(f - 32);
        k = c + 273;
        break;
        case 'Kelvin':
        k = val;
        c = k - 273;
        f = ((9/5)*c) + 32;
        break;
        default:;
    }
    return([
        {unit: 'Celsius', value: c},
        {unit: 'Fahrenheit', value: f},      
        {unit: 'Kelvin', value: k}
    ])
}

const convertTorque = (initUnit, val) => {
    let kgcm = val;
    switch(initUnit){
        case 'Newton Meters': 
        kgcm /= 0.09807;
        break;
        case 'Foot lbs': 
        kgcm /= 0.07233;
        break;  
        case 'Inch lbs': 
        kgcm /= 0.868;
        break;        
        case 'KG cm': 
        kgcm = val;
        break;
        case 'KG M': 
        kgcm /= 0.01;
        break;     
    default:;
    }
    const nm = kgcm * 0.0980707;
    const ftlb = kgcm * 0.07233;
    const inlb = kgcm * 0.868;
    const kgm = kgcm * 0.01;

    return([
        {unit: 'Newton Meters', value: nm},  
        {unit: 'Foot lbs', value: ftlb},  
        {unit: 'Inch lbs', value: inlb},
        {unit: 'KG cm', value: kgcm},
        {unit: 'KG M', value: kgm}      
    ])
}

const convertForce = (initUnit, val) => {
    let oz = val;
    switch(initUnit){
        case 'Newtons': 
        oz /=0.278;
          break;
        case 'Pounds':
        oz = val/0.0625;
          break;
        case 'Ounces':
        oz = val;
          break;
         default:;
    }
    const N = oz * 0.278;
    const lb = oz * 0.0625;
    return([
        {unit: 'Newtons', value:N},
        {unit: 'Pounds', value:lb},
        {unit: 'Ounces', value:oz},
        ]             
     );
}

const convertDistance = (initUnit, val) => {
    let mm = val;
    switch(initUnit){
        case 'Millimeters': 
         mm = val;
             break;        
         case 'Meters':
        mm /= 0.001;
             break; 
        case 'Centimeters':
            mm /= 0.1;
             break;
        case 'Yards':
            mm /= 0.0010936;
             break;
        case 'Feet':
            mm /= 0.003280;
             break;         
        case 'Inches':
            mm /= 0.039370;
             break;
        case 'Kilometers':    
        //kilometer
        mm /= Math.pow(10,-6);
             break;
        case 'Miles':
        mm = val * (1.609347e+6);
             break;          
        default:;
    }
    const km = mm * Math.pow(10,-6);       
    const m = mm * 0.001;
    const cm = mm * 0.1;
    const inch = mm * 0.039370;
    const ft = mm * 0.003280;
    const yd = mm * 0.0010936;
    const mi = mm / (1.609347e+6);

         return([
            {unit: 'Meters', value: m},
            {unit: 'Millimeters', value:mm},
            {unit: 'Centimeters', value:cm},
            {unit: 'Yards', value:yd},
            {unit: 'Feet', value:ft},
            {unit: 'Inches', value:inch},
            {unit: 'Kilometers', value:km},
            {unit: 'Miles', value:mi}
            ]             
         );
}

const convertArea = (initUnit, val) => {
    let mm = val;
    const _km = Math.pow(Math.pow(10,-6),2);       
    const _m = Math.pow(0.001,2);
    const _cm = Math.pow(0.1,2);
    const _in = Math.pow(0.039370,2);
    const _ft = Math.pow(0.003280,2);
    const _yd = Math.pow(0.0010936,2);
    const _mi = Math.pow((1.609347e+6),2);
    switch(initUnit){
        case 'Sq. Millimeters': 
         mm = val;
         break;        
         case 'Sq. Meters':
         mm /= _m;
           break; 
        case 'Sq. Centimeters':
         mm /= _cm;
             break;
        case 'Sq. Yards':
            mm /= _yd;
               break;
        case 'Sq. Feet':
            mm /= _ft;
            break;         
        case 'Sq. Inches':
            mm /= _in;
            break;
        case 'Sq. Kilometers':    
        //kilometer
        mm /= _km;
        break;
        case 'Sq. Miles':
            mm = val * _mi;
           break;          
        default:;
    }
         const km = mm * _km;       
         const m = mm * _m;
         const cm = mm * _cm;
         const inch = mm * _in;
         const ft = mm * _ft;
         const yd = mm * _yd;
         const mi = mm / _mi;
         return([
            {unit: 'Sq. Meters', value: m},
            {unit: 'Sq. Millimeters', value:mm},
            {unit: 'Sq. Centimeters', value:cm},
            {unit: 'Sq. Yards', value:yd},
            {unit: 'Sq. Feet', value:ft},
            {unit: 'Sq. Inches', value:inch},
            {unit: 'Sq. Kilometers', value:km},
            {unit: 'Sq. Miles', value:mi} 
            ]             
         );
}

export default {
    convertArea, 
    convertDistance, 
    convertForce,
    convertPressure,
    convertTemperature,
    convertTorque,
    convertVacuum,
    convertVolume,
    convertWeight
};