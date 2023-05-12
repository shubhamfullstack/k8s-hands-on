import axios from "axios";
import React, { FormEvent, useState } from "react";

interface Props {
    id:string
}

export const CreateComment: React.FC<Props> = ({ id }) => {
  const [comment, setComment] = useState("");

  const createComment = async () => {
    try {
        await axios.post(`http://localhost:3032/comments/v1/${id}`, {
            content: comment
        });
        setComment("");
      } catch (e) {
        console.error(e);
      }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createComment()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-4">
        <div>
          <label htmlFor="post" className="sr-only">
            Comment
          </label>

          <div className="relative">
            <input
              type="post"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Comment"
              value={comment}
              onChange={(e)=> setComment(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-600 border border-solid border-gray-100"
          >
            Comment
          </button>
        </div>
      </form>
  );
};
