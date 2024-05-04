import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";

const App = () => {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const deleteItem = (id) => {
    const newArray = income.filter((item) => item.id !== id);
    setIncome(newArray);
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < income.length; i++) {
      total = +income[i].price;
    }
    setTotalIncome(total);
  }, [income]);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <div className="incomeListContainer">
        {income.map((item) => (
          <div className="incomeList" key={item.id}>
            <div>{item.desc}</div>
            <div>{item.price}</div>
            <div>{item.date}</div>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
