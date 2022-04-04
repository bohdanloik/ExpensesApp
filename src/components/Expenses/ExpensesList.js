import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    if (props.expense.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expense.map((element)=> (
                <ExpenseItem 
                    title={element.title} 
                    amount={element.amount} 
                    date={element.date}
                    key={element.id}
                />
            ))}
        </ul>
    )

}

export default ExpensesList;