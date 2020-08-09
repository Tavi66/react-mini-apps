import React from 'react';

const monthlyPayment = (props) => {
    const P = props.principal;
    const r = props.interest;
    const m = props.loanPeriod;

    const divdend = 1 - Math.pow((1+r/12),-m);
    const divisor = P * (r/12);
    
    const monthlyPayment = (divisor/divdend).toFixed(2);
    const total = (monthlyPayment*m).toFixed(2);
    return <div>
      Total Amount: ${total} <br/>
      Monthly payments: ${monthlyPayment}
    </div> ;
    
  }

  export default monthlyPayment;