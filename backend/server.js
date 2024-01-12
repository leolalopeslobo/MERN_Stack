require('dotenv').config()
const express = require('express')

const workoutRoutes = require("./routes/workouts")


//create the express app
const app = express()


//Registrating Global request
//middleware
app.use((req,res,next) => {
    //next - to send to the next piece of middleware
    console.log("Request path",req.path,"and Request method", req.method)
    next()
})


//ROUTES
//react to request
//the GET request is technically a kind of middleware
app.get("/", (req,res)=>{
    res.json({mssg: "Welcome to the app"}) //json string
    // res.send("You started the APP!")
}) //root of the domain

//listen for request on a certain port number
app.listen(process.env.PORT, ()=>{
    console.log("listening in port",process.env.PORT)
})
