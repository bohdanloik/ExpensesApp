import {useState} from 'react';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import "./Expense.css";

function Expense (props) { 
    const [filteredYear, setFilteredYear]= useState('2022');
    const expense = props.expense.filter(el => el.date.getFullYear().toString() === filteredYear);
    const filterChangeHanler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(filteredYear);
    };
    
    return (
        <Card className="expenses">
        <ExpensesFilter onChangeFilterHanler={filterChangeHanler} selected={filteredYear}/>
        <ExpensesChart expense={expense}/>
        <ExpensesList expense={expense} />
        </Card>
    )
 }

 export default Expense;