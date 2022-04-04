import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpenses";

function App() {

// const expense = [
//     {title: 'Car Insurance', amount: '$222,20', date: new Date(2022, 3, 31), id: 'e1'},
//     {title: 'Shop', amount: '$100,20', date: new Date(2022, 0, 20), id: 'e2'},
//     {title: 'Gas', amount: '$1500,20', date: new Date(2022, 3, 31), id: 'e3'},
//     {title: 'Other', amount: '$2500,20', date: new Date(2022, 3, 31), id: 'e4'},
//   ]
	const [expense, setExpense] = useState([]);

	const addExpenseHandler = (getExpense) => {
		setExpense([...expense, getExpense]);
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expense expense={expense}/>
		</div>
	);
}

export default App;
