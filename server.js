const express = require("express");
mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const db = require("./models");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/blogPosts";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get("/api/posts", (req, res) => {
  console.log("getting posts");
  db.Post.find({})
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.get("/api/posts/:id", (req, res) => {
  db.Post.find({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.post("/api/posts/add", (req, res) => {
  console.log(req.body);
  db.Post.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.put("/api/posts/update/:id", (req, res) => {
  db.Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.delete("/api/posts/remove/:id", (req, res) => {
  Post.deleteOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.listen(PORT, function() {
  console.log(
    `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});
