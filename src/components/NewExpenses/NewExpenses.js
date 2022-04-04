import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';
import './NewExpenses.css';

const NewExpenses = (props) => {
    const [formStatus, setFormStatus] = useState(false);
    const openFormHandler = () => {
        setFormStatus(!formStatus);
    }
    const saveExpanseDateHandler = (enteredExpenseData) => {
        const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString(),
            };
            props.onAddExpense(expenseData);
        };

    return (
        <div className="new-expense">
            {formStatus ? 
            <ExpenseForm onSaveExpenseDate={saveExpanseDateHandler} openFormHandler={openFormHandler}/>
            : <button onClick={openFormHandler}>Add New Expenses</button>
            }
        </div>
    );
}

export default NewExpenses;