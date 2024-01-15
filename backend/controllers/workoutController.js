//creating a bunch of functions (logics)
const Workout = require('../models/workoutModel') //importing the database model
const mongoose = require('mongoose')

//function to 'get all workouts'
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})  //sorting according to dates but -a makes it from newest date to the oldest
    //find({ reps: 20 }) - this will get you all the workouts that have reps = 20
    
    res.status(200).json(workouts)
}

//function to 'get a single workout'
const getWorkout = async (req, res) => {
    const { id } = req.params

    //checks if the id is a valid mongoose or mongodb id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }


    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


//function to 'create a workout'
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body //destructing from the  request body

    let emptyFields = [] //here we detect which fields are empty
    //checking if title is empty and incase it is then we push it into the array emptyFields
    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }

    //checking is the length is greater than 0 & if that is the case that means at least one field is empty
    if(emptyFields.length > 0){
        return res.status(404).json({ error: 'Please fill in all fields', emptyFields })
    }

    //add doc to db
    try{
        const workout = await Workout.create({title, reps, load})
        //create() is syn, therefore change the handle to be asyn
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }

    //post a workout - create a new workout
    //res.json({msg:"POST a new workout"})
}

//function to 'delete a workout'
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


//function to 'update a workout'
const updateWorkout = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body  //speading the properties
    })


    if(!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}