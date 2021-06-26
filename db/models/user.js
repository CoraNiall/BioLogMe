const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    userName: {
      type: String,
      required: true
    },
    dob: Date,
    password: {
      type: String,
      required: true
    }
  });
  
  userSchema.methods.greet = function () {
    const greeting = this.name
      ? "Welcome " + this.name
      : "Welcome you-who-shall-remain-nameless";
    console.log(greeting);
  }
  
const User = mongoose.model('User', userSchema);
module.exports = User;