import express from "express";
import PostAttrs from "../../interfaces/PostRequest";
import { getPosts, savePosts } from "../../services/posts";

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const { content } = req.body;
  const post: PostAttrs = {
    content,
  };
  return res.json(await savePosts(post));
});

export default router;
