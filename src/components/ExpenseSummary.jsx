import React from 'react';

export default function ExpenseSummary({ proexpenses }) {
  const income = proexpenses
    .filter((e) => e.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = proexpenses
    .filter((e) => e.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income + expense;

  return (
    <div className="flex items-center justify-center p-6">
      <div
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white transition-all duration-700 ease-out animate-fadeIn"
      >
        <h3 className="text-3xl font-extrabold mb-8 tracking-wide text-center drop-shadow-lg">
          Expense Summary
        </h3>

        <div className="space-y-4">
          <p className="flex justify-between text-lg">
            <span className="text-white">INCOME</span>
            <span className="font-mono font-bold text-green-400">
              ${income}
            </span>
          </p>
          <p className="flex justify-between text-lg">
            <span className="text-white">EXPENSES</span>
            <span className="font-mono font-bold text-red-400">
              ${Math.abs(expense)}
            </span>
          </p>
          <p className="flex justify-between text-lg">
            <span className="text-white">BALANCE</span>
            <span
              className={`font-mono font-bold ${balance >= 0 ? 'text-green-300' : 'text-red-300'}`}
            >
              ${balance}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
