import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  //  if we use blank parameter due this we don't have dependency so with 1st time will get call
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    //  to clean  up the useEffect process if user moves to another page then cleanup from memory
    return () => {
      console.log("cleaning up useEffect");
      controller.abort();
    };
  }, []);
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
