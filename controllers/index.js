module.exports = {
  api: require('./apiController'),
  users: require('./usersController', './adminController'),
  trails: require('./trailsController')
};
