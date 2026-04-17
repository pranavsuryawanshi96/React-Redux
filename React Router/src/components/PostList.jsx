import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostListData);

  //  if we use blank parameter due this we don't have dependency so with 1st time will get call
  //  so here we after click on btn getting the posts for this user came on page so can we try  with useEffect
  // const handleGetPostClicks = () => {
  //   // fetch("https://dummyjson.com/posts")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     addInitialPosts(data.posts);
  //   //   });
  // };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {/* other case fetching should be false  */}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
