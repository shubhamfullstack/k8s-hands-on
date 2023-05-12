import React from "react";
import { Post } from "./PostList";
import { CommentList } from "./CommentList";
import { CreateComment } from "./CreateComment";

export const PostItem: React.FC<Post> = ({ content, id }) => {
  return (
    <span className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {content}
          </h3>
        </div>
      </div>

      <div className="mt-4">
        <CommentList id={id} />
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <CreateComment id={id} />
      </dl>
    </span>
  );
};
