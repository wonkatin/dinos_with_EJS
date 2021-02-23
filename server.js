// Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(methodOverride('_method'))
// urlencoded gets the form data from the request and puts it inside of
// req.body
//Controllers
app.use('/dinos', require ('./controllers/dinosController'))
// Routes
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/views/index.html')
    res.render('index', { name: 'Sarah', friends: ['Louisa', 'Erin', 'Kathy', 'Nakisha' ]})
})
app.get('/anotherpage', (req, res)=> {
    res.render('anotherpage')
})

// Start the server!
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})