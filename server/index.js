const express = require("express")
const mongoose = require("mongoose")
const UserModel = require("./models/Users")

const cors = require("cors")

const app = express()
//important for post request bc post requests will be in json but we are expecting an object, as seen in const user = req.body. So this will parse the json
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://dchan68:abcde123@cluster0.p9lpi.mongodb.net/mernpractice?retryWrites=true&w=majority")

//with req, can get info sent from frontend and res is data from backend to frontend
app.get("/getUsers", (req, res) => {
    //Using find function to retrieve all users. If empty object {}, then it will find everything within collection
    UserModel.find({}, (err, results) => {
        //if error
        if(err){
            res.json(err);
        }else{
            //if successful in getting data, json() is used to parse results into json and sending it to frontend using res
            res.json(results);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user) //to create new user, need new UserModel from the import and pass data to create
    await newUser.save(); //saving new user will require await and making callback function async since it's multiprocess
    //when everything is done, need to return to frontend and will do this using res and send back something we created, in this case user
    res.json(user);
})

app.listen(3001, () => {
    console.log('Server runs perfectly');
});