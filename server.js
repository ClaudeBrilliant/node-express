const express = require('express');
const app = express();
const path = require('path');

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
app.get('/api/posts', function(req, res){ 

})


app.listen(3000, function(){
console.log("Server is running on port 3000")
})