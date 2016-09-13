var mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost/project_03' ||
                  process.env.MONGODB_URI
                  );

module.exports = {
  User: require('./user'),
  Trail: require('./trail')
};
