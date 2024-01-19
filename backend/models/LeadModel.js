const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
    }, { timestamps: true}); //this adds a creats and update time


// const Lead = mongoose.model('Lead', leadSchema);
//module.exports = mongoose.model('Lead', leadSchema);
const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;