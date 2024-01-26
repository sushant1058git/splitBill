import Friends from "./friends";
import AddFriends from "./addfriends";
import BillForm from "./billform";
import Button from "./button";
import { useState } from "react";

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
  const [formVisibility, setFormVisibility] = useState(false);
  const [friends, setfriends] = useState(initialFriends);
  const [selectFriend, setselectFriend] = useState(null);

  function handleNewFriend(currFriend) {
    setfriends((friends) => [...friends, currFriend]);
    setFormVisibility(false);
  }

  function showAddFriendForm() {
    return setFormVisibility((show) => !show);
  }

  function handleselectFriend(friend) {
    // setselectFriend(friend);
    setselectFriend((currFriend) =>
      currFriend?.id === friend.id ? null : friend
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          onselectFriend={handleselectFriend}
          selectFriend={selectFriend}
        />
        {formVisibility && <AddFriends onAddFriend={handleNewFriend} />}
        <Button onClick={showAddFriendForm}>
          {formVisibility ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectFriend && <BillForm selectFriend={selectFriend} />}
    </div>
  );
}
