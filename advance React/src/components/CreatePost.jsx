import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdEl = useRef();
  const postTitleEl = useRef();
  const postBodyEl = useRef();
  const reactionsEl = useRef();
  const tagsEl = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdEl.current.value;
    const postTitle = postTitleEl.current.value;
    const postBody = postBodyEl.current.value;
    const reactions = reactionsEl.current.value;
    const tags = tagsEl.current.value.split(" ");
    userIdEl.current.value = "";
    postTitleEl.current.value = "";
    postBodyEl.current.value = "";
    reactionsEl.current.value = "";
    tagsEl.current.value = "";

    //  we have pass to addpost this data
    addPost(userId, postTitle, postBody, reactions, tags);
    alert("Post is posted ");
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdEl}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleEl}
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postBodyEl}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsEl}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsEl}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
