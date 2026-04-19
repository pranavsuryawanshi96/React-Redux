import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const postList = useLoaderData();

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
      {/* other case fetching should be false  */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
