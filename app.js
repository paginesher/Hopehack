const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv/config");
const app = express();

const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to database 
mongoose.connect('mongodb+srv://hyeb96:Sm17emina@cluster0.yyfegbj.mongodb.net/hopehacks', { useNewUrlParser: true }, { useUnifiedTopology: true })

//create schema 
const contactsSchema = {
    name: String,
    email: String,
    message: String
}

//create model
const contacts = mongoose.model("contacts", contactsSchema)

app.post("/contact", (req, res) => {
    let newContacts = new contacts({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContacts.save();
    res.redirect('/contact');
})

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/public.pics"));


//route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname + '/aboutus.html'));
})

app.get('/assistance', (req, res) => {
    res.sendFile(path.join(__dirname + '/assistance.html'));
})

app.get('/statistic', (req, res) => {
    res.sendFile(path.join(__dirname + '/API.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
})


//importing users routers and set it to starts with 'users'
// const userRouter = require('./routes/users')
// app.use('/users', userRouter)


app.listen(3000); //telling to listen on port 3000
