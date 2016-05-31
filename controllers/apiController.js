function index(req, res) {
  res.json({
    message: "Welcome to bay trails!",
    documentation_url: "https://github.com/adamrobertreid/project_03",
    base_url: "https://bay-trails.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "POST", path: "/auth/signup", description: "Signup to user bay trails"},
      {method: "POST", path: "/auth/login", description: "Login to user account"},
      {method: "GET", path: "/api/me", description: "Show the current user"},
      {method: "PUT", path: "/api/me", description: "Update current user"},
      {method: "GET", path: "/api/trails", description: "Get all trails"},
      {method: "POST", path: "/api/trails", description: "Create a new trial"},
      {method: "GET", path: "/api/trails/:id", description: "Show individual trail"},
      {method: "PUT", path: "/api/trails/:id", description: "Update a trail"},
      {method: "DELETE", path: "/api/trails/:id", description: "Desstroy current trail"}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
