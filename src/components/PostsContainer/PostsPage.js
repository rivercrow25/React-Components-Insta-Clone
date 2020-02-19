//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import DummyData from '../../dummy-data'
// import data 


const PostsPage = () => {
  // set up state for your data
  const [data] = useState(DummyData)
  { console.log(data) }
  return (
    <div className="posts-container-wrapper">
      {data.map(item => {
        return <Post post={item} />
      })}

    </div>
  );
};

export default PostsPage;

