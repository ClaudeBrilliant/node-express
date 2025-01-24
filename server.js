import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/error.js';
import logger from './middleware/logger.js';
import posts from './routes/post.js';
const app = express();
const port = process.env.PORT || 3000;

//get the dir name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
//it parses incoming request with JSON payloads

//logger middleware
app.use(logger)

app.use(express.json())
app.use(express.urlencoded({extended: false}))// allows to parse url encoded data

// setup static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/api/posts', posts);


//error handler middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, function(){
console.log(`Server is running on port ${port}`)
})