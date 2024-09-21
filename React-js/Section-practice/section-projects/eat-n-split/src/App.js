import { useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showBillContainer, setShowBillContainer] = useState(false);

  function handleShowAddFriend(e) {
    setShowAddFriend((prevState) => !prevState);
  }

  function handleShowBillContainer(e) {
    setShowBillContainer((prevState) => !prevState);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onToggleBtn={handleShowBillContainer}
          showBillContainer={showBillContainer}
        />
        {showAddFriend && <AddFriend />}
        <Button onToggleBtn={handleShowAddFriend}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {showBillContainer && <FormSplitBill />}
    </div>
  );
}

function FriendsList({ onToggleBtn, showBillContainer }) {
  return (
    <div className="friendList">
      <ul className="list flex">
        {initialFriends.map((friend) => (
          <Friend
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
            key={friend.name}
            onToggleBtn={onToggleBtn}
            showBillContainer={showBillContainer}
          />
        ))}
      </ul>
    </div>
  );
}

function Friend({ name, image, balance, onToggleBtn, showBillContainer }) {
  return (
    <li className="list-item">
      <img src={image} alt="friend of me" />
      <div className="flex">
        <h3>{name}</h3>
        {balance > 0 ? (
          <p style={{ color: "green" }}>{`${name} owes you ${balance}EUR`}</p>
        ) : (
          ""
        )}
        {balance < 0 ? (
          <p style={{ color: "red" }}>{`You owe ${name} ${Math.abs(
            balance
          )}EUR`}</p>
        ) : (
          ""
        )}
        {balance === 0 && <p>{`You and ${name} are even`}</p>}
      </div>
      <Button onToggleBtn={onToggleBtn}>
        {!showBillContainer ? "Select" : "Close"}
      </Button>
    </li>
  );
}

function FormSplitBill() {
  return (
    <div className="bill-container">
      <h1>SPLIT A BILL WITH SARAH</h1>
      <BillElement emoji="💰" title="Bill Value" />
      <BillElement emoji="🧍" title="Your Expenses" />
      <BillElement emoji="🧑‍🤝‍🧑" title="Sarah's Expenses" />
      <div className="grid-container">
        <span>🤑</span>
        <p>Who is paying the bill?</p>
        <select>
          <option value="You">You</option>
          <option value="Sarah">Sarah</option>
        </select>
      </div>
      <Button>Split Bill</Button>
    </div>
  );
}

function BillElement({ emoji, title }) {
  return (
    <div className="grid-container">
      <span>{emoji}</span>
      <p>{title}</p>
      <input type="text" />
    </div>
  );
}

function AddFriend() {
  return (
    <div className="add-friend">
      <div className="grid-container">
        <span>🤳</span>
        <label htmlFor="">Friend name</label>
        <input type="text" />
      </div>
      <div className="grid-container">
        <span>🌆</span>
        <label htmlFor="">Image URL</label>
        <input type="text" />
      </div>
      <Button>Add</Button>
    </div>
  );
}

function Button({ children, onToggleBtn }) {
  return <button onClick={(e) => onToggleBtn(e)}>{children}</button>;
}
