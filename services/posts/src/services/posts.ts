import PostAttrs from "../interfaces/PostRequest";
import { Post } from "../models/post";

const savePosts = async (postAttrs:PostAttrs) => {
    const post = Post.build(postAttrs);
    await post.save();
    return post
}

const getPosts = async () => {
    const posts = await Post.find({});
    return posts
}

export {
    savePosts,
    getPosts
}