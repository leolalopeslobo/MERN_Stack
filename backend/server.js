console.log("Hello World")

const express = require('express')

const schedule = require('node-schedule')

const app = express()

app.get('/', (req,res)=>{
    res.send('Hello! Express')
})


//Do task at a date/time
//this library works with the nativejavascrit Date object
const date = new Date(2024, 0, 16, 9, 12, 0)

schedule.scheduleJob(date, function() {
    console.log("Job done! @ "+ new Date());
});


//Repeat time
//Use of CRON EXPRESSION instead of Date object for now

i = 0
n = 5
const job = schedule.scheduleJob('*/5 * * * * *', function(){
    //Task
    console.count("Job done!")
    i++

    if(i === n){
        job.cancel();
    }



    // *    *    *    *    *    *
    // ┬    ┬    ┬    ┬    ┬    ┬
    // │    │    │    │    │    │
    // │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
    // │    │    │    │    └───── month (1 - 12)
    // │    │    │    └────────── day of month (1 - 31)
    // │    │    └─────────────── hour (0 - 23)
    // │    └──────────────────── minute (0 - 59)
    // └───────────────────────── second (0 - 59, OPTIONAL)

})



const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server ruuning on http://localhost:${PORT}`)
})