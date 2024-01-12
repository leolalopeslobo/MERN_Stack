const express = require('express')

//import
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require("../controllers/workoutController")

const router = express.Router() //creates an instanse of the router

router.get("/", getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id',(req,res)=>{
    //delete a workout
    res.json({msg:"DELETE a new workout"})
})

router.patch('/:id',(req,res)=>{
    //update a workout
    res.json({msg:"UPDATE a new workout"})
})

module.exports = router