const express = require('express');
const app = express();
app.use(express.json()); 

require('./db/connection');
const Users = require('./Models/Users');

// app.get("/api", (req, res) =>{
//     res.json({ "user": ["userOne", "userTow", "userThree", "userFour"]})
// })

app.post("/createUser", async(req, res) =>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(5000, () => { console.log("Server running at port 5000") }) 