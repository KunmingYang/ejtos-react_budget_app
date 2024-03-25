import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const {currency} = useContext(AppContext);


    const handleBudgetChange = (event) => {

        
        if(event.target.value > 20000)
        {
            alert("You cannot add the budget higher than 20,000");
                
                return;
        }
        else if(event.target.value < totalExpenses)
        {
            alert("You cannot reduce the budget lower than the spending");
                
                return;
        }
        else
        {
            setNewBudget(event.target.value);
        }
            
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{Budget} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;