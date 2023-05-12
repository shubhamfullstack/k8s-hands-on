import express from 'express';
import comments from './v1/comments';


const router = express.Router();

router.use('/v1', comments);

export default router;
