import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const totalTip = (myTip + friendTip) / 2;

  const totalPayment = bill + totalTip;

  console.log(myTip, friendTip, totalTip, totalPayment);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <BillInput bill={bill} onBill={setBill}>
          How much was the bill?
        </BillInput>
        <SelectPercentage bill={bill} onTip={setMyTip}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage bill={bill} onTip={setFriendTip}>
          How did your friend like the service?
        </SelectPercentage>

        <Output />
        <Reset />
      </form>
    </div>
  );
}

function BillInput({ bill, onBill, children }) {
  const handleChange = (e) => onBill(Number(e.target.value));
  console.log(bill);

  return (
    <div className="questions">
      {children}
      <input type="text" value={bill} onChange={handleChange} />
    </div>
  );
}

function SelectPercentage({ bill, children, onTip }) {
  const handleSelect = (e) => onTip(bill * e.target.value);

  return (
    <div className="questions">
      {children}{" "}
      <select onChange={handleSelect}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return;
}

function Reset() {
  return;
}
