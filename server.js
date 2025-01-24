const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// setup static folder
//app.use(express.static(path.join(__dirname, 'public')))

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
app.get('/api/posts', function(req, res){ 
    const limit = req.query.limit
    if(!isNaN(limit) && limit > 0){
        posts = posts.slice(0, limit)
    } else {  
    res.json(posts)}
})

//get single post
app.get('/api/posts/:id', function(req, res){
    const id = req.params.id
    const post = posts.find(post => post.id == id)
    res.json(post)
})



app.listen(port, function(){
console.log(`Server is running on port ${port}`)
})