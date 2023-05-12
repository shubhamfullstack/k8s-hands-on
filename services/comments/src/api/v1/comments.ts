import express from "express";
import { getComments, saveComments } from "../../services/comment";
import CommentAttrs from "../../interfaces/CommentRequest";

const router = express.Router();

router.post("/:postId", async (req, res) => {
  const { content } = req.body;
  const postId = req.params.postId;
  const comment: CommentAttrs = {
    postId,
    content,
  };
  return res.json(await saveComments(comment));
});

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const posts = await getComments(postId);
  res.json(posts);
});

export default router;
