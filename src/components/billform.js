import { useState } from "react";
import Button from "./button";

export default function BillForm({ selectFriend }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill - yourExpense;
  const [whoIsPaying, setwhoIsPaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>{`Split your Bill with ${selectFriend.name}`}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      <label>🙋🏻‍♂️ Your Expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
      ></input>
      <label>{`🙋🏻‍♀️${selectFriend.name}'s expense`}</label>
      <input type="text" readOnly value={friendExpense}></input>
      <label>🤑 Who is paying the bill?</label>
      <select type="text">
        <option value="user">You</option>
        <option value="friend">{`${selectFriend.name}`}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
