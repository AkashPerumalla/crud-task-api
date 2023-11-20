const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
    .then(()=>{
        console.log("DB Connected Successfully!!!");
    })
    .catch((error) => {
        console.log("Error occurred while DB connect",error);
    });

module.exports = mongoose;