import axios from "axios";
import React, { useEffect, useState } from "react";
import { PostItem } from "./PostItem";

export interface Post {
  id: string;
  content: string;
}

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3031/posts/v1/");
      console.log(data);
      setPosts(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="py-8 flex flex-row gap-4">
      {posts.map((post: Post) => {
        return <PostItem content={post.content} id={post.id} />;
      })}
    </div>
  );
}
