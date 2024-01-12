const express = require('express')

const router = express.Router() //creates an instanse of the router

router.get("/", (req,res) => {
    //get all the workouts
    res.json({msg:"GET all workout"})
})

router.get('/:id',(req,res)=>{
    //get single workout
    res.json({msg:"GET a single workout"})
})

router.post('/',(req,res)=>{
    //post a workout - create a new workout
    res.json({msg:"POST a new workout"})
})

router.delete('/:id',(req,res)=>{
    //delete a workout
    res.json({msg:"DELETE a new workout"})
})

router.patch('/:id',(req,res)=>{
    //update a workout
    res.json({msg:"UPDATE a new workout"})
})

module.exports = router