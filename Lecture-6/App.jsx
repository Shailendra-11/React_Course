 import ExpenseForm from "./compnents/ExpenseForm";
 import ExpenseTable from "./compnents/ExpenseTable";
import  "./App.css"
import { useState } from "react";
import expenseData from "./ExpressDate"
const  App = () =>{
    const [expenses ,setExpenses] = useState(expenseData)
    return(
     <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} />
      </div>
    </main>
    )
} 

export  default App;