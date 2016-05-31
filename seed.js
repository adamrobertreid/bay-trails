var db = require("./models");

var user_list = [
  {
    email: "admin@mail.com",
    password: "123",
    displayName: "Admin Account",
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
    image: "http://i.imgur.com/HfitIlj.jpg",
    address: "Battery to Bluffs Trail, San Francisco, CA",
    description: "This short trail provides a great way to see the bluffs near the Presidio and offers views of the Golden Gate Bridge and Marin that are hard to beat.",
    dogFriendly: true,
    trailLength: 0.7,
    difficulty: "Moderate",
    trailSurface: "unpaved",
    trailRating: "",
    trailPending: true,
  },
  {
    trailName: "Stinson Beach to Mt. Tamalpais",
    image: "http://i.imgur.com/J4sQLxF.jpg",
    address: "Stinson Beach Trail, Marin, CA",
    description: "This short trail provides a great way to see the bluffs near the Presidio and offers views of the Golden Gate Bridge and Marin that are hard to beat.",
    dogFriendly: true,
    trailLength: 17.3,
    difficulty: "Difficult",
    trailSurface: "unpaved",
    trailRating: "",
    trailPending: false,
  },
  {
    trailName: "Mount Diablo's Grand Loop",
    image: "http://i.imgur.com/5IiZpxP.jpg",
    address: "Mt Diablo, California 94598",
    description: "The Grand Loop offers a bird's-eye view of the Bay Area, and sometimes glimpses far beyond, of the Farallon Islands, Mount Lassen, the Sierra Nevada, and the Santa Cruz Mountains. It's also a a hotspot for wildflowers in the spring.",
    dogFriendly: false,
    trailLength: 6.2,
    difficulty: "Moderate",
    trailSurface: "unpaved",
    trailRating: "",
    trailPending: true,
  }
];

db.User.remove({}, function(){
  db.Trail.remove({}, function(){
    db.User.create(user_list, function(err, user){
      console.log('users',user);
      if (err || !user) { return console.log(err); }
      db.Trail.create(trail_list, function(err, trails){
          if (err) { return console.log(err); }
          console.log("Created", trails.length, "trails" + trails);
          process.exit();
        }
      );
    });
  });
});
