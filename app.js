//importing necessities
const express=require('express')
const restaurantRoutes=require('./routes/restaurant')


//create server
let app=express();


//declaring port no
const PORT = 8900;
const log=console.log;


//middleware
app.use('',restaurantRoutes);


app.listen(PORT,()=>{
    log(`the server is running on port : ${PORT}`);
})


