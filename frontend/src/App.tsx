import React from "react";
import PostList from "./components/PostList";
import { CreatePost } from "./components/CreatePost";

function App() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Tech Talkies</h1>

        <p className="mt-4 text-gray-500">
          Welcome to the application!! Post your tech thoughts below 🚀🚀🚀🚀
        </p>
      </div>
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;
