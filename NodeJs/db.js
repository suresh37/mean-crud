const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudDB',
//mongoose.connect('mongodb://Suresh:suresh007@ds129770.mlab.com:29770/sureysh',
    (err) => {
        if(!err)
          console.log('MongoDB connection succeded...');
        else
          console.log('Error in DB connection: '+
               JSON.stringify(err,undefined,2));
 });

 module.exports = mongoose;