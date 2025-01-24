// controllers are the functions that are called when a certain route is hit

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
//@desc get all posts
//@route GET /api/posts
export const getPosts = function(req, res, next){ 
    const limit = req.query.limit
    if(!isNaN(limit) && limit > 0){
        posts = posts.slice(0, limit)
        return res.json(posts)
    }  
    return res.json(posts)
}


//@desc get single post
//@route GET /api/posts/:id
export const getpost = function(req, res, next){
    const id = req.params.id
    const post = posts.find(post => post.id == id)

    if(!post){
      const error = (`Post of id ${id} was not found`)
      return next(error)
    } 
        res.status(200).json(post)
}

//@desc create post
//@route POST /api/posts

export const createPost = function(req, res, next){
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
}

//@desc update post
//@route PUT /api/posts/:id

export const updatePost =  function(req, res, next){
    const id = req.params.id
    const post = posts.find(post => post.id == id)
    if(!post){
        return res.status(404).json({message: `Post of id ${id} was not found`})
    }
    const {title, content} = req.body
    post.title = title
    post.content = content
    res.json(post)
}

//@desc delete post
//@route DELETE /api/posts/:id

export  const deletePost = function(req, res, next){
    const id = req.params.id
    const post = posts.find(post => post.id == id)
    if(!post){
        return res.status(404).json({message: `Post of id ${id} was not found`})
    }
    posts = posts.filter(post => post.id != id)
    res.json({message: `Post of id ${id} was deleted`})
}