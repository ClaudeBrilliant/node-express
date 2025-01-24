import express from 'express';
const router = express.Router();    
import logger from '../middleware/logger.js';
import colors from 'colors';
import { createPost, deletePost, getpost, getPosts, updatePost } from '../controllers/postController.js';



//get all posts
router.get('/',getPosts)

//get single post
router.get('/:id',getpost) 

//create post
router.post('/', createPost)

//update post
router.put('/:id',updatePost)

//post delete
router.delete('/:id',deletePost)

export default router;