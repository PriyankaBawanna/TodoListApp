import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(4500);
  const [expense, setExpense] = useState(500);
  
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
    calculateBalance(savedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    calculateBalance(transactions);
  }, [transactions]);

  const calculateBalance = (trans) => {
    let income = 4500;
    let exp = 0;
    trans.forEach((t) => (t.amount > 0 ? (income += t.amount) : (exp += Math.abs(t.amount))));
    setBalance(income);
    setExpense(exp);
  };

  const addTransaction = (name, amount) => {
    const newTransaction = { id: Date.now(), name, amount };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const pieData = [
    { name: "Food", value: 200, color: "#8000FF" },
    { name: "Entertainment", value: 300, color: "#FF8000" },
    { name: "Travel", value: 100, color: "#FFD700" },
  ];

  const barData = pieData.map((item) => ({ name: item.name, value: item.value }));

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h2>Wallet Balance: <span className="text-green-400">₹{balance}</span></h2>
          <button className="bg-green-500 text-white px-3 py-1 mt-2">+ Add Income</button>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h2>Expenses: <span className="text-red-400">₹{expense}</span></h2>
          <button className="bg-red-500 text-white px-3 py-1 mt-2">+ Add Expense</button>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <PieChart width={200} height={200}>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h2 className="italic">Recent Transactions</h2>
          {transactions.map((t) => (
            <div key={t.id} className="flex justify-between p-2 border-b border-gray-500">
              <span>{t.name}</span>
              <span className={t.amount > 0 ? "text-green-400" : "text-red-400"}>₹{t.amount}</span>
              <button onClick={() => deleteTransaction(t.id)} className="bg-red-500 px-2">X</button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-700 rounded-lg">
          <h2 className="italic">Top Expenses</h2>
          <BarChart width={300} height={200} data={barData}>
            <XAxis dataKey="name" stroke="#FFF" />
            <YAxis stroke="#FFF" />
            <Tooltip />
            <Bar dataKey="value" fill="#8000FF" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
