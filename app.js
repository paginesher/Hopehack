const express = require('express'); //require imports express packages
const mongoose = require('mongoose'); //requires imports mongoose packages
const bodyParser = require('body-parser'); // require imports bodyParser middleware 
require("dotenv/config"); //importing configuration 
const app = express();  //runs express function

const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //using middleware and telling to read json files
// const postRoute = require('./routes/post.js');
// app.use('/posts', postRoute);


// app.get('/', (req, res) => { //getting a request and outputting a response
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

app.post("/", (req, res) => {
    let newContact = new contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newContact.save();
    res.redirect('/');
})

app.use(express.static(__dirname + '/public'));


//route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
})

//importing users routers and set it to starts with 'users'
// const userRouter = require('./routes/users')
// app.use('/users', userRouter)


app.listen(3000); //telling to listen on port 3000
