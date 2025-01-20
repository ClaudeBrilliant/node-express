var express = require('express');
var app = express();
app.use(express.json());

var path = require('path');

var bodyparser = require('body-parser');

// // Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyparser.urlencoded({ extended: false })

// app.use(bodyparser.json())
// app.use(express.static('public'))

// app.get ("/", function(req,res){
//     res.sendFile(path.join(__dirname,'/index.html'))
// })

// app.get('/process_get', function(req,res){
//     //prepare output in json format
//     response = {
//         first_name:req.query.first_name,
//         last_name:req.query.last_name
//     }
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

// app.post('/process_post', )

//RestApis

var fs = require('fs')

//GET method
// app.put('/:id', function(req, res) {
//     fs.readFile(__dirname + "/users.json", "utf8", function(err, data) {
//         if (err) {
//             console.error("Error reading file:", err);
//             res.status(500).send("An error occurred while reading the file.");
//             return;
//         }
//         var users = JSON.parse(data);
//         var user = users["user" + req.params.id];
//         if (user) {
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(user)); // Corrected function name
//         } else {
//             res.status(404).send("User not found.");
//         }
//     });
// });

//POST method

app.post('/', function(res,req){
    fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
        var users = JSON.parse(data);
        var user = req.body.user4;
        users["user" +user.id] = user;
        res.end(JSON.stringify(users));
    })
})
//PUT method
// app.put('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const updatedUserData = req.body;

//     fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return res.status(500).send('An error occurred while reading the file.');
//         }

//         let users;
//         try {
//             users = JSON.parse(data);
//         } catch (parseErr) {
//             console.error('Error parsing JSON:', parseErr);
//             return res.status(500).send('An error occurred while parsing the file.');
//         }

//         if (!users[`user${userId}`]) {
//             return res.status(404).send('User not found.');
//         }

//         // Update the user's data
//         users[`user${userId}`] = { ...users[`user${userId}`], ...updatedUserData };

//         fs.writeFile(__dirname + '/users.json', JSON.stringify(users, null, 2), (writeErr) => {
//             if (writeErr) {
//                 console.error('Error writing file:', writeErr);
//                 return res.status(500).send('An error occurred while writing the file.');
//             }

//             res.setHeader('Content-Type', 'application/json');
//             res.status(200).send(users[`user${userId}`]);
//         });
//     });
// });


app.listen(3000, function(){
console.log("Server is running on port 3000")
})