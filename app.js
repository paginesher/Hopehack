const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv/config");
const app = express();

const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// const postRoute = require('./routes/post.js');
// app.use('/posts', postRoute);


// app.get('/', (req, res) => { 
//     res.send('you are connected');
// })
// app.get("/posts", (req, res) => { //posting the route to http request
//     res.send('we are in post');
// })
// //connect to db
// mongoose.connect(process.env.DB_CONNECTION, () => { //mongoose is the db
//     console.log('connected to db');
// })

//connect to database 
mongoose.connect('mongodb+srv://hyeb96:Sm17emina@cluster0.yyfegbj.mongodb.net/hopehack', { useNewUrlParser: true }, { useUnifiedTopology: true })

//create schema 
const contactSchema = {
    name: String,
    email: String,
    message: String
}

//create model
const contact = mongoose.model("contact", contactSchema)

app.post("/contact", (req, res) => {
    let newContact = new contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContact.save();
    res.redirect('/contact');
})

app.use(express.static(__dirname + '/public'));


//route
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
})

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname + '/aboutus.html'));
})

app.get('/assistance', (req, res) => {
    res.sendFile(path.join(__dirname + '/assistance.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
})


//importing users routers and set it to starts with 'users'
// const userRouter = require('./routes/users')
// app.use('/users', userRouter)


app.listen(3000); //telling to listen on port 3000
