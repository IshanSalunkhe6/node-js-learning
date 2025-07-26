const express = require('express');
const mongoose = require('mongoose');
const userRouter=require("./routes/user");
const {logReqRes}=require('./middleware');

const app=express();

//Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/usersdb',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

// Handle connection events
const db = mongoose.connection;
db
    .on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});




//middlewares
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));





// setup for routing
app.use('/api/users',userRouter);



app.listen(9000, () => {
  console.log(`Server is listening at http://localhost:9000`);
});