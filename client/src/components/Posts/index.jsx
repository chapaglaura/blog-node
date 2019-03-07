import React from "react";
import PostCard from "../PostCard";

const Posts = props => {
  const posts = props.posts;

  return posts.map((el,i) => {
    return (
      <PostCard key={i} index={i} post={el} />
    );
  })
}

export default Posts;
