import React from 'react';

const loanCalculator = (props) => {
    return(<div>
        Loan Amount ($): <input type='number' onChange={props.amountChanged}/> <br/>
        Interest (%): <input type='number' onChange={props.interestChanged}/> <br/>
        Loan Term (months): <input type='number' onChange={props.loanTermChanged}/>
    </div>
    )
}

export default loanCalculator;