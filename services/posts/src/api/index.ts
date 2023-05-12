import express from 'express';
import posts from './v1/posts';


const router = express.Router();

router.use('/v1', posts);

export default router;
