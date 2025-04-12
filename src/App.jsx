import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import Bg from "./images/coins.jpg"; //importing the coin image
//importing our components

function App() {
  const [expenses, setExpenses] = useState([]);//holds lists of expenses
  const [searchTerm, setSearchTerm] = useState("");//stores the search term

  const handleAddExpense = (expense) => {//function to handle adding an expense
    setExpenses([...expenses, expense]);//...expenses keeps the previous expenses and adds the new one
  };

  const handleSearch = (term) => {//function to handle search
    setSearchTerm(term);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.name.includes(searchTerm) || e.description.includes(searchTerm)//filters the expenses based on the search term
  );
  return (
    <div
      className="p-4 max-w-4xl mx-auto bg-sky-100 shadow-md rounded bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex gap-6">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}
export default App;
