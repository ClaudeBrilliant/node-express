import express from 'express';
const router = express.Router();    

let posts = [
    {
        id: 1,
        title: "Post 1",
        content: "This is the first post"
    },
    {
        id: 2,
        title: "Post 2",
        content: "This is the second post"
    },
    {
        id: 3,
        title: "Post 3",
        content: "This is the third post"
    }   
]

//get all posts
router.get('/', function(req, res){ 
    const limit = req.query.limit
    if(!isNaN(limit) && limit > 0){
        posts = posts.slice(0, limit)
        return res.json(posts)
    }  
    return res.json(posts)
})

//get single post
router.get('/:id', function(req, res){
    const id = req.params.id
    const post = posts.find(post => post.id == id)

    if(!post){
      return res.status(404).json({message: `Post of id ${id} was not found`})
    } 
        res.status(200).json(post)
})

//create post
router.post('/', function(req, res){
    const {title, content} = req.body
    const id = posts.length + 1
    const newPost = {
        id,
        title,
        content
    }
    if(!title){
        return res.status(400).json({message: "title are required"})
    }
    posts.push(newPost)
    res.status(201).json(newPost)
})

//update post
router.put('/:id', function(req, res){
    const id = req.params.id
    const post = posts.find(post => post.id == id)
    if(!post){
        return res.status(404).json({message: `Post of id ${id} was not found`})
    }
    const {title, content} = req.body
    post.title = title
    post.content = content
    res.json(post)
})

//post delete
router.delete('/:id', function(req, res){
    const id = req.params.id
    const post = posts.find(post => post.id == id)
    if(!post){
        return res.status(404).json({message: `Post of id ${id} was not found`})
    }
    posts = posts.filter(post => post.id != id)
    res.json({message: `Post of id ${id} was deleted`})
})

export default router;