var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI ||
                  'mongodb://localhost/project_03' );

module.exports = {
  User: require('./user'), Trail: require('./trail')
};
