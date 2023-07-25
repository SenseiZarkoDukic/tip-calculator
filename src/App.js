import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);

  return (
    <div className="App">
      <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage />
      <SelectPercentage />
      <Output />
      <Reset />
    </div>
  );
}

export default App;

function BillInput() {
  return <div></div>;
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
