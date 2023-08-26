const express= require('express');
const app=express(); //making app variable and calling express fucntion
const path=require('path');

const PORT=process.env.PORT || 3000; //if env have value or default 3000
app.use(express.static('public'));   //for forntend css
const connectDB = require('./config/db');
connectDB(); // calling function

//template engine
app.set('views',path.join(__dirname,'/views'));    // for using expess js //path inbuilt module of nodejs
//dirname will give konse file me hai views' and hwere the html file sare\
app.set('view engine','ejs');


//routes
app.use('/api/files',require('./routes/files')); //post request

app.use('/files',require('./routes/show')); //get request
app.use('/files/download',require('./routes/download'));



app.listen(PORT, () =>{                     //second parameter is a function, here arrow fucntion
console.log(`Listening on port ${PORT}`);

})