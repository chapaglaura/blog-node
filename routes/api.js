const express = require("express");
const postRouter = express.Router();

module.exports = db => {
  postRouter.get("/", (req, res) => {
    db.Post.find({})
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });

  postRouter.get("/:id", (req, res) => {
    db.Post.find({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });

  postRouter.post("/add", (req, res) => {
    console.log('adding...');
    db.Post.create(req.body)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });

  postRouter.put("/update/:id", (req, res) => {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });

  postRouter.delete("/remove/:id", (req, res) => {
    Post.deleteOne({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => console.log(err));
  });

  return postRouter;
};
