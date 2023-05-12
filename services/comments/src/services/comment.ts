import CommentAttrs from "../interfaces/CommentRequest";
import { Comment } from "../models/comment";

const saveComments = async (commentAttrs:CommentAttrs) => {
    const comment = Comment.build(commentAttrs);
    await comment.save();
    return comment
}

const getComments = async (postId:string) => {
    const comments = await Comment.find({ postId })
    return comments
}

export {
    saveComments,
    getComments
}