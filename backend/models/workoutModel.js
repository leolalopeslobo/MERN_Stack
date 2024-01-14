const mongooose = require('mongoose')

//define how workout document should look
const Schema = mongooose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true}) //this adds a creats and update time


module.exports = mongooose.model('Workout', workoutSchema)