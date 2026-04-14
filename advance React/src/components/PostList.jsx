import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostClicks = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClicks={handleGetPostClicks} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
