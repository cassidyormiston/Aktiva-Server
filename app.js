const express = require('express');
const app = express();
const cors = require('cors')
const router = express.Router();
const users = require('./models/user')
const activities = require('./models/activity')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/newDatabase";
app.use(bodyParser.json())

app.use(cors({
    origin: '*'
}))

// Routes
app.get('/', (req, res) => {
    res.send('We are home')
})

// get all the users
app.get('/users', async (req, res) => {
    // get all the users
    try {
        const allUsers = await users.find()
        res.json(allUsers);
        return allUsers;
    } catch(err) {
        res.json({message: err});
    }
})

app.get('/users/${id}', (req, res) => {
    // get a specific user
    return res.send('A specific user')
})

// create a user
app.post('/users', async (req, res) => {
    const user = new users({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        location: req.body.location,
        email: req.body.email,
        loggedIn: req.body.loggedIn
    });
    user.save()
    .then(data => {
        console.log(data)
    })

    return user;
})

// get all activities
app.get('/activities', async (req, res) => {
    try {
        const allActivities = await activities.find()
        res.json(allActivities);
        return allActivities;
    } catch(err) {
        res.json({message: err});
    }
})

app.post('/activity', async (req, res) => {
    const activity = new activities({
        name: req.body.name,
        description: req.body.description,
        organisation: req.body.organisation,
        date: req.body.date,
    });
    activity.save()
    .then(data => {
        console.log(data)
    })

    return activity;
})

app.put('/users/:user', async (req, res) => {
    const { user } = req.params;
    await users.updateOne( { user }, req.body);
})

// connect to db
mongoose.connect(
    url, 
    { useNewUrlParser: true },
    () => console.log('connected to db'));

app.listen(3000)