import { useState } from "react";
import Button from "./button";

export default function AddFriends({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !image) return;
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>Friend's Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image Url</label>
      <input
        type="text"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
