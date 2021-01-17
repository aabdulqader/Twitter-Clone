import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./TweetBox.css";
import db from "../../../Firebase";
import firebase from "firebase";
import { useStateValue } from "../../../ContextData/StateProvider";

const TweetBox = () => {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      displayName: user.displayName,
      username: user.displayName,
      verified: true,
      text: input,
      avatar: user.photoURL,
      image: imageURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    setImageURL("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar className="tweetBox__avatar" src={user.photoURL} />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
          />
        </div>
        <input
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="tweetBox__fileinput"
          placeholder="Enter Image URL"
        />
        <Button type="submit" onClick={handleSubmit}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
