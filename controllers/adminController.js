var auth = require('../middleware/auth');
var db = require('../models'),
    User = db.User;


function login(req, res) {
  User.findOne({ email: req.body.email }, '+password', function (err, user) {
    if (!user) {
      console.log('admin controller 401',user);
      return res.status(401).send({ message: 'Not Authorized Admin Account.' });
    }

    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        console.log('admin controller password');
        return res.status(401).send({ message: 'Invalid email or password.' });
      }
      res.send({ token: auth.createJWT(user) });
      console.log('adminController user',user);
    });
  });
}
