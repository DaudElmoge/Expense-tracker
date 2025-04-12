function ExpenseTable({ expenses }) { //expenses is passed as a prop from the parent component(App.jsx)
  return (
    <table className="table-auto w-2/3 border-separate border border-black ">
      <thead>
        <tr>
          <th className="border p-2">Expense</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(
          (
            exp,
            index // loops through the expenses and creates a table row for each expense
          ) => (
            <tr key={index}>
              <td className="border p-2">{exp.name}</td>
              <td className="border p-2">{exp.description}</td>
              <td className="border p-2">{exp.category}</td>
              <td className="border p-2">{exp.amount}</td>
              <td className="border p-2">{exp.date}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
// This component is responsible for displaying the list of expenses in a table format.
// It receives the expenses as props and maps through them to create table rows.
// Each row displays the expense name, description, category, amount, and date.