// call the express
const express = require("express")
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors');

// create the app with the help of express
const app = express();
app.use(bodyParser.json({extended: true}));
app.use(cors());

const posts = {};
//dfhjsdfjsjkdfjdsh
// use app to create routes
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

// listen to port no?
app.listen(4000, () => {
    console.log('Listening on 4000');
});

