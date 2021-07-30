// call the express
const express = require("express")
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors');
//32. emitting events
const axios = require('axios');

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

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };
    //32. emitting events
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    });

    res.status(201).send(posts[id]);
});

//34. Events Handlers received by posts and comments application from event bus
app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.send({});
});



// listen to port no?
app.listen(4000, () => {
    console.log('Listening on 4000');
});

