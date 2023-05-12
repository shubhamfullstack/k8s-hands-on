import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  id: string;
}

export const CommentList: React.FC<Props> = ({ id }) => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3032/comments/v1/${id}`);
        setComments(data);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
        fetchComments();
    }, []);

  return (
    <ol className="max-w-[40ch] text-sm text-gray-500 list-disc">
     {comments.map((comment: { content:string }) => {
        return <li>{ comment.content }</li>;
      })}
    </ol>
  );
};
