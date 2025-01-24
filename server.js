import express from 'express';
import path from 'path';
import posts from './routes/post.js';
const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
//it parses incoming request with JSON payloads

app.use(express.json())
app.use(express.urlencoded({extended: false}))// allows to parse url encoded data

// setup static folder
//app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/api/posts', posts);



app.listen(port, function(){
console.log(`Server is running on port ${port}`)
})