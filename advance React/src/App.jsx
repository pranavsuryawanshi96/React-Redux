import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  // if user click on sidebar on home screen should update state also user reload the page user default goes to home page
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        {/* to use this functionality send the prop  */}
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {/* if selectedTab is value is Home so then value should render PostList if values is not home then createPost */}
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
