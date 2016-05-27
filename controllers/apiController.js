function index(req, res) {
  res.json({
    message: "Welcome to bay trails!",
    documentation_url: "",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}
