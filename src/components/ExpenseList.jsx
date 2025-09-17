import React from 'react';

export default function ExpenseList({ proexpenses, deleteExpenses, editExpenses }) {
  return (
    <div className="flex items-center justify-center  p-6">
      <div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white transition-all duration-700 ease-out animate-fadeIn"
      >
        <h3 className="text-3xl font-extrabold mb-8 tracking-wide text-center drop-shadow-lg">
          Expense List
        </h3>

        <div className="space-y-4">
          {proexpenses.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 shadow-inner hover:shadow-lg transition-all duration-300"
            >
              <span className="text-white font-semibold">
                {item.title} - ${item.amount}
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() => deleteExpenses(item._id)}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white px-4 py-2 rounded-md font-bold transition-all duration-300 shadow-md"
                >
                  Delete
                </button>
                <button
                  onClick={() => editExpenses(item)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-4 py-2 rounded-md font-bold transition-all duration-300 shadow-md"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
