require('dotenv').config()
const express = require('express')
//importing mongoose
const mongooose = require("mongoose")

const workoutRoutes = require("./routes/workouts")


//create the express app
const app = express()


//Registrating Global request
//middleware
app.use(express.json()) //this checks if the request has some data sending to the server, if it does it passes it and attaches it to the request object so that it can be accessed in the request handler 

app.use((req,res,next) => {
    //next - to send to the next piece of middleware
    console.log("Request path",req.path,"and Request method", req.method)
    next()
})


//ROUTES
app.use('/api/workouts', workoutRoutes)  //grabs all the routes and uses them over here


//CONNECTING TO THE DATABASE
mongooose.connect(process.env.MONGO_URI) //this function is asyn in nature so it takes a little bit of time to do and therefore it returns a 'promise'
    .then(() => {
        console.log("Connected to the DB")
        //listen for request on a certain port number, once connected to DB
        app.listen(process.env.PORT, ()=>{
            console.log("listening in port",process.env.PORT)
        })
    }) //.then method to fire a function when it's complete
    .catch((error) => {
        console.log(error)
    }) //to catch any kind of error
