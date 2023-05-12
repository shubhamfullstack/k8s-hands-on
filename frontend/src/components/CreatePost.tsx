import axios from "axios";
import React, { FormEvent, useState } from "react";

export const CreatePost: React.FC = () => {
  const [post, setPost] = useState("");

  const createPost = async () => {
    try {
        const { data } = await axios.post("http://localhost:3031/posts/v1/", {
            content: post
        });
        console.log(data);
        setPost("");
      } catch (e) {
        console.error(e);
      }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="post" className="sr-only">
            Post
          </label>

          <div className="relative">
            <input
              type="post"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Post"
              value={post}
              onChange={(e)=> setPost(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Post
          </button>
        </div>
      </form>
  );
};
