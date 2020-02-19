// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [data1] = useState(props.comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {data1.map((item) => {
        return <Comment key={item.username} comment={item} />
        console.log(item)
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
