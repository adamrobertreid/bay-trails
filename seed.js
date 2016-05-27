var db = require("./models");

var user_a = {
  email: "a",
  password: "a",
  displayName: "Alan Perlis"
}

//removes coffee shop before loading to prevent accumilating.
 db.User.remove({}, function() {
   console.log('removed all users');
 db.User.create(user_a, function(err, user){
   if (err){
     return console.log("Error:", err);
   }
   console.log("User", user);
   process.exit(); // we're all done! Exit the program.
    });

 });
