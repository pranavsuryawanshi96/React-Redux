import { createContext, useEffect, useReducer, useState } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
// Create Provider
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const [fetching, setFetching] = useState(false);
  // fetch from api
  // for now commenting this code because we are using loader for fetching data
  // useEffect(() => {
  //   setFetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });
  //   //  to clean  up the useEffect process if user moves to another page then cleanup from memory
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const addPost = (post) => {
    if (!post) {
      alert("Please fill all required fields");
      return;
    }
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList(
      {
        type: "DELETE_POST",
        payload: {
          postId,
        },
      },
      [dispatchPostList],
    );
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
