import { useState } from "react";

function ExpenseForm({ onAddExpense }) { // This component handles the form for adding expenses
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //updates the form data dynamically
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
      setFormData({ name: "", description: "", amount: "", date: "" });// prevents page refresh
      //sends the form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/3">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
        className="p-2 border"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="p-2 border"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="p-2 border"
      />
      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="p-2 border"
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        className="p-2 border"
      />
      <button className="bg-black text-white p-2 hover:bg-green-400 rounded-3xl">Submit</button>
    </form>
  );
}

export default ExpenseForm;