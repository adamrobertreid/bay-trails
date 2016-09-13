var mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost/project_03' ||
                  process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL
                  );

module.exports = {
  User: require('./user'),
  Trail: require('./trail')
};
