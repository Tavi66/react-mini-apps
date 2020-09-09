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
        {unit: 'Pascal', value: Math.round(p*1000)/1000},
        {unit: 'kPa', value: Math.round(kpa*1000)/1000},  
        {unit: 'In H2O', value: Math.round(inh2o*1000)/1000},
        {unit: 'In Hg', value: Math.round(inhg*1000)/1000},
        {unit: 'Millibar', value: Math.round(mb*1000)/1000},        
        {unit: 'mm Hg', value: Math.round(mmhg*1000)/1000},
        {unit: 'Atmospheres', value: Math.round(at*1000)/1000},
        {unit: 'KG/sq. cm.', value: Math.round(kgsqcm*1000)/1000},
        {unit: 'Bar', value: Math.round(b*1000)/1000}
])
}
const convertVolume = (initUnit, val) => {
    let oz = val;
    switch(initUnit){
        case 'Liters': oz /= 0.0296;
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
        {unit: 'Liters', value: Math.round(l*1000)/1000},
        {unit: 'Fluid Ounces', value: Math.round(oz*1000)/1000},
        {unit: 'Quarts', value: Math.round(qt*1000)/1000},  
        {unit: 'Gallons', value: Math.round(gal*1000)/1000},
        {unit: 'Cu. Inches', value: Math.round(inc*1000)/1000},
        {unit: 'Cu. Centimeters', value: Math.round(cmc*1000)/1000},
        {unit: 'Cu. Feet', value: Math.round(ftc*1000)/1000},
        {unit: 'Cu. Yards', value: Math.round(ydc*1000)/1000},
        {unit: 'Cu. Meters', value: Math.round(mc*1000)/1000}
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
        {unit: 'Kilograms', value: Math.round(kg*1000)/1000},
        {unit: 'Ounces', value: Math.round(oz*1000)/1000},
        {unit: 'Pounds', value: Math.round(lb*1000)/1000},
        {unit: 'English Tons', value: Math.round(eton*1000)/1000  > 0.001 ? Math.round(eton*1000)/1000 : eton},
        {unit: 'Metric Tons', value: Math.round(mton*1000)/1000  > 0.001 ? Math.round(mton*1000)/1000 : mton},
        {unit: 'Grams', value: Math.round(g*1000)/1000}
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
        {unit: 'Bar', value: Math.round(b*1000)/1000},
        {unit: 'Pascal', value: Math.round(p*1000)/1000},
        {unit: 'kg/cm', value: Math.round(kgcm*1000)/1000},
        {unit: 'kPa', value: Math.round(kpa*1000)/1000},  
        {unit: 'Atmospheres', value: Math.round(at*1000)/1000},
        {unit: 'psi', value: Math.round(psi*1000)/1000},
        {unit: 'Millibar', value: Math.round(mb*1000)/1000}  

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
        {unit: 'Newton Meters', value: Math.round(nm*1000)/1000},  
        {unit: 'Foot lbs', value: Math.round(ftlb*1000)/1000},  
        {unit: 'Inch lbs', value: Math.round(inlb*1000)/1000},
        {unit: 'KG cm', value: Math.round(kgcm*1000)/1000},
        {unit: 'KG M', value: Math.round(kgm*1000)/1000}      
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
        {unit: 'Newtons', value:Math.round(N*1000)/1000},
        {unit: 'Pounds', value:Math.round(lb*1000)/1000},
        {unit: 'Ounces', value:Math.round(oz*1000)/1000},
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
            {unit: 'Meters', value: Math.round(m*1000)/1000},
            {unit: 'Millimeters', value:Math.round(mm*1000)/1000},
            {unit: 'Centimeters', value:Math.round(cm*1000)/1000},
            {unit: 'Yards', value:Math.round(yd*1000)/1000},
            {unit: 'Feet', value:Math.round(ft*1000)/1000},
            {unit: 'Inches', value:Math.round(inch*1000)/1000},
            {unit: 'Kilometers', value:Math.round(km*10000)/10000 > 0.001 ? Math.round(km*1000)/1000 : km},
            {unit: 'Miles', value:Math.round(mi*1000)/1000 > 0.001 ? Math.round(mi*1000)/1000 : mi}
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
            {unit: 'Sq. Meters', value: Math.round(m*1000)/1000},
            {unit: 'Sq. Millimeters', value:Math.round(mm*1000)/1000},
            {unit: 'Sq. Centimeters', value:Math.round(cm*1000)/1000},
            {unit: 'Sq. Yards', value:Math.round(yd*1000)/1000},
            {unit: 'Sq. Feet', value:Math.round(ft*1000)/1000},
            {unit: 'Sq. Inches', value:Math.round(inch*1000)/1000},
            {unit: 'Sq. Kilometers', value:Math.round(km*1000)/1000  > 0.001 ? Math.round(km*1000)/1000 : km},
            {unit: 'Sq. Miles', value:Math.round(mi*1000)/1000  > 0.001 ? Math.round(mi*1000)/1000 : mi} 
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