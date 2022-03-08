const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});  

//model() takes in 2 params, the name of the collection which we created in MongoDB and the schema
const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel