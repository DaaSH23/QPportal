const express = require('express');
const app = express();
app.use(express.json()); 
const mongoose = require('mongoose');

//require('./db/connection');
const db_url  = 'mongodb://Abhishek_Oraon:abhishekOraon1209@ac-cekfyuo-shard-00-00.emehrbo.mongodb.net:27017,ac-cekfyuo-shard-00-01.emehrbo.mongodb.net:27017,ac-cekfyuo-shard-00-02.emehrbo.mongodb.net:27017/?replicaSet=atlas-u6abp1-shard-0&ssl=true&authSource=admin'
// const conn = mongoose.connect(dbRoute, { useNewUrlParser: true })
const Users = require('./Models/Users');
// const db = conn.db('QPportal');

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'QPportal',
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch(err => console.error(err));

// app.get("/api", (req, res) =>{
//     res.json({ "user": ["userOne", "userTow", "userThree", "userFour"]})
// })

app.post("/createUser", async(req, res) =>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
})

app.listen(5000, () => { console.log("Server running at port 5000") }) 