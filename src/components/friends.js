import Button from "./button";

export default function Friends({ friends, onselectFriend, selectFriend }) {
  return (
    <ul>
      {friends.map((f) => (
        <FriendItem
          friend={f}
          key={f.id}
          onselectFriend={onselectFriend}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}

function FriendItem({ friend, onselectFriend, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;
  console.log(isSelected);
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.image}></img>
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you $ {friend.balance}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} $ {friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onselectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
