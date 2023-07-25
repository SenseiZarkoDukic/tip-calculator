import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <BillInput bill={bill} onBill={setBill}>
          How much was the bill?
        </BillInput>
        <SelectPercentage />
        <SelectPercentage />
        <Output />
        <Reset />
      </form>
    </div>
  );
}

function BillInput({ bill, onBill, children }) {
  const handleChange = (e) => onBill(e.target.value);
  console.log(bill);

  return (
    <div>
      {children}
      <input type="text" value={bill} onChange={handleChange} />
    </div>
  );
}

function SelectPercentage() {
  return <div></div>;
}

function Output() {
  return;
}

function Reset() {
  return;
}
