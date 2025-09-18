import React, { useEffect, useState } from 'react'

export default function ExpenseForm({addExpense,itemToEdit}) {
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState("")
   
    useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setAmount(itemToEdit.amount.toString());
    } else {
      setTitle("");
      setAmount("");
    }
  }, [itemToEdit]);

 const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense(title, amount,itemToEdit?._id);
  };
  return (
   <>
   <form
     onSubmit={handleSubmit}
     className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto text-white transition-all duration-700 ease-out animate-fadeIn"
   >
     <h3 className="text-2xl font-extrabold mb-6 tracking-wide text-center drop-shadow-lg">{itemToEdit ? "Edit Expense" : "Add Expense"}</h3>
     <div className="mb-6">
       <label className="block font-semibold mb-2 text-white/80">Title</label>
       <input
         type="text"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required
         className="w-full px-4 py-2 rounded-lg border-none bg-white/20 text-white font-medium shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
         placeholder="Expense Title"
       />
     </div>
     <div className="mb-6">
       <label className="block font-semibold mb-2 text-white/80">Amount</label>
       <input
         type="number"
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
         required
         className="w-full px-4 py-2 rounded-lg border-none bg-white/20 text-white font-medium shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
         placeholder="Amount"
       />
     </div>
     <div className="flex gap-4 justify-center">
       <button
         type="submit"
         className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-6 py-2 rounded-md font-bold transition-all duration-300 shadow-md"
       >
         {itemToEdit ? "Update Expense" : "Add Expense"}
       </button>
       {itemToEdit && (
         <button
           type="button"
           onClick={() => {
             setItemToEdit(null);
             setTitle('');
             setAmount('');
           }}
           className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white px-6 py-2 rounded-md font-bold transition-all duration-300 shadow-md"
         >
           Cancel
         </button>
       )}
     </div>
   </form>
   </>
  )
}