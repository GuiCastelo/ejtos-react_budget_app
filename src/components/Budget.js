import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const handleBudget = (budget) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost)
        }, 0);

        if(budget > 20_000){
            dispatch({
                type: 'SET_BUDGET',
                payload: 20_000
            })
            alert(`Budget cannot be greater than ${currency}20_000`);    
        } else if(budget < totalExpenses){
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses
            })
            alert("You cannot reduce the budget lower than the spending");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            })
        }
    }   

    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency}:
                <input
                    type='number'
                    required='required'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '1rem' , size: 10}}
                    onChange={(e) => handleBudget(e.target.value)}
                    step='10'
                >
                </input>
            </span>
        </div>
    )
};
export default Budget;
