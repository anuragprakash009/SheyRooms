const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://anuragprakash8521:shankar@cluster0.cogtc.mongodb.net/SheyRooms?retryWrites=true&w=majority';


mongoose.connect(mongoURL).then(()=>{
    console.log("Coonected to mongoDB");
}).catch((err)=>{
    console.log(err);
})

const connection = mongoose.connection;
module.exports = mongoose;