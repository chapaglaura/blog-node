const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The post title field is required']
  },
  body: {
    type: String,
    required: [true, 'The post content field is required']
  },
  author: {
    type: String,
    required: [true, 'The post author field is required']
  }
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;