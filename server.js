const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser')
const ejs = require('ejs');
const City = require('./models/citiesModel');
const Country = require('./models/countriesModel');
const State = require('./models/statesModel');
const User = require('./models/usersModel');
const Group = require('./models/groupsModel');
const Library = require('./models/librariesModel');
const LibraryUsers = require('./models/libraryUsersModel');



app.set('view engine', 'ejs');

const cors = require('cors')
app.use(cors());

 

 

app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())



const url = `mongodb+srv://remotlogdevuser:info123@iras-prod.v9lcm.mongodb.net/prod_iras?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
   }
   mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })



app.get('/', function(req, res) {
    res.render('pages/index');
});


app.get('/cities', (req, res) => {
    City.find({}, function(err, cities) {
        res.render('index', {
            citiesList: cities
        })
    })
})
// app.get('/cities', (req, res) => {
//     City.find({}) 
//         .then(foundCities => res.json(foundCities))
       
// })

app.get('/countries', (req, res) => {
    Country.find({}, function(err, countries) {
        res.render('countries', {
            countriesList: countries
        })
    })
})

app.get('/states', (req, res) => {
    State.find({}, function(err, states) {
        res.render('states', {
            statesList: states
        })
    })
})

app.get('/users', (req, res) => {
    User.find({}, function(err, users) {
        res.render('users', {
            usersList: users
        })
    })
})

//    app.get('/users', (req, res) => {
//     User.find({})
//         .then(foundUsers => res.json(foundUsers))
//    })

app.get('/groups', (req, res) => {
    Group.find({}, function(err, groups) {
        res.render('groups', {
            groupsList: groups
        })
    })
})

app.get('/libraries', (req, res) => {
    Library.find({}, function(err, libraries) {
        res.render('libraries', {
            librariesList: libraries
        })
    })
})

app.get('/libraryusers', (req, res) => {
    LibraryUsers.find({}, function(err, libraryusers) {
        res.render('libraryUsers', {
            libraryusersList: libraryusers
        })
    })
})


app.listen(8000, function() {
    console.log('server is running on port 8000');
})
