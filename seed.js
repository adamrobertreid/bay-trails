var db = require("./models");

var user_list = [
  {
    email: "adam@mail.com",
    password: "123",
    displayName: "adamreid",
    admin: true
  },
  {
    email: "user@mail.com",
    password: "123",
    displayName: "user",
    admin: false
  }

];

var trail_list = [
  {
    trailName: "Batteries to Bluffs Trail",
    image: String,
    address: "Battery to Bluffs Trail, San Francisco, CA",
    description: "This short trail provides a great way to see the bluffs near the Presidio and offers views of the Golden Gate Bridge and Marin that are hard to beat.",
    dogFriendly: true,
    trailLength: 0.7,
    difficulty: "Moderate",
    trailSurface: "unpaved",
    trailRating: Number,
    trailPending: true,
  },
  {
    trailName: "Stinson Beach to Mt. Tamalpais",
    image: String,
    address: "Stinson Beach Trail, Marin, CA",
    description: "This short trail provides a great way to see the bluffs near the Presidio and offers views of the Golden Gate Bridge and Marin that are hard to beat.",
    dogFriendly: true,
    trailLength: 17.3,
    difficulty: "Difficult",
    trailSurface: "unpaved",
    trailRating: Number,
    trailPending: true,
  }
];

//removes coffee shop before loading to prevent accumilating.
db.User.remove({}, function(){
  db.Trail.remove({}, function(){
    db.User.create(user_list, function(err, user){
      if (err || !user) { return console.log(err); }

      db.Trail.create(trail_list, function(err, trails){
          if (err) { return console.log(err); }
          console.log("Created", trails.length, "trails");
          process.exit();
        }
      );
    });
  });
});






//removes coffee shop before loading to prevent accumilating.
 // db.User.remove({}, function() {
 //   console.log('removed all users');
 // db.User.create(user_a, function(err, user){
 //   if (err){
 //     return console.log("Error:", err);
 //   }
 //   console.log("User", user);
 //   process.exit(); // we're all done! Exit the program.
 //    });
 //
 // });
 // db.User.remove({}, function() {
 //   console.log('removed all users');
 //   db.User.create(user_list, function(err, user){
 //     if (err) {
 //       console.log('error creating user from seed data', err);
 //       return;
 //     }
 //     console.log('recreated all users');
 //     console.log("created", users.length, "users");
 //
 //
 //     db.Trail.remove({}, function(err, trails){
 //       console.log('removed all trails');
 //       trails_list.forEach(function (trailData) {
 //         var trail = new db.Trail({
 //           trailName: trailData.trailName,
 //           image: trailData.image,
 //           address: trailData.address,
 //           description: trailData.description,
 //           dogFriendly: trailData.dogFriendly,
 //           trailLength: trailData.trailLength,
 //           difficulty: trailData.difficulty,
 //           trailSurface: trailData.trailSurface,
 //           trailPending: trailData.trailPending
 //         });
 //         db.User.findOne({name: trailData.author}, function (err, foundAuthor) {
 //           console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
 //           if (err) {
 //             console.log(err);
 //             return;
 //           }
 //           book.author = foundAuthor;
 //           book.save(function(err, savedBook){
 //             if (err) {
 //               return console.log(err);
 //             }
 //             console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
 //           });
 //         });
 //       });
 //     });
 //
 //   });
 // });
