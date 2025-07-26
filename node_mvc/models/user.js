const mongoose = require('mongoose');


// this file has create schema,model and than export it.
// create schema
const { Schema } = mongoose;

const userSchema = new Schema({
   firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
      type: String,},
  },  {timestamps:true}

);

// create model
const User = mongoose.model('User', userSchema);

//export model
module.exports=User;