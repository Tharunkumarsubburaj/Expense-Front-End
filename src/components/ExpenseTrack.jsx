import { useEffect, useState } from 'react';
import ExponseForm from './ExponseForm';
// import { v4 as uid } from "uuid";
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import axios from 'axios';

export default function ExpenseTrack() {

  const EXPENSES = [ ];

  const [expenses, setExpenses] = useState(EXPENSES);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    fetchData();
  }, [expenses])

  const fetchData = async () => {
    axios.get('http://localhost:3000/api/getdata')
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch expenses:', error.message);
      });
  }

  const addExpense = (title, amount, id) => {
    if (id) {
      axios.put(`http://localhost:3000/api/${id}`, { title, amount: Number(amount) })
        .catch((error) => console.error('Update Expense Error:', error.message));
        fetchData();
    } else {
      axios.post('http://localhost:3000/api/postdata', { title, amount: Number(amount) })
        .then((res) => {
          setExpenses([...expenses, res.data]);
        })
        .catch((error) => {
          console.error('Add Expense Error:', error.message);
        });
    }
  };

  const deleteExpense = (id) => {
    axios.delete(`http://localhost:3000/api/${id}`)
      .then(() => {
        setExpenses(expenses.filter((exp) => exp._id !== id));
      })
      .catch((error) => {
        console.error('Delete Expense Error:', error.message);
      });
  };

  const editExpenses = (value) => {
    setItemToEdit(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000080] via-[#001f4d] to-[#000033] text-white font-sans antialiased">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-extrabold text-white mb-8 tracking-wide text-center drop-shadow-lg">
          Expense Tracker
        </h2>

        <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 shadow-lg mb-8">
          <ExponseForm addExpense={addExpense} itemToEdit={itemToEdit} />
        </div>

        <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 shadow-lg mb-8">
          <ExpenseList
            proexpenses={expenses}
            deleteExpenses={deleteExpense}
            editExpenses={editExpenses}
          />
        </div>

        <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-6 shadow-lg">
          <ExpenseSummary proexpenses={expenses} />
        </div>
      </div>
    </div>
  );
}
