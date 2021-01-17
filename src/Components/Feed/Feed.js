import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import Post from "./Post/Post";
import TweetBox from "./TweetBox/TweetBox";
import db from "../../Firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <div>
        <h2 className="feet__header">Home</h2>
        <TweetBox />
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.id}
              displayName={post.data.displayName}
              username={post.data.username}
              verified={post.data.verified}
              text={post.data.text}
              avatar={post.data.avatar}
              image={post.data.image}
              timestamp={post.data.timestamp}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feed;
