import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Post = props => {
  const { title, body, author, _id } = props.post;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-lg-4">
      <div className="card" data-id={_id}>
        <div className="card-body">
          <Link to={`/posts/${_id}`}>
            <h3 className="card-title">{title}</h3>
          </Link>
          <p className="card-text truncated">{body}</p>
          <small className="text-muted">{author}</small>
        </div>
      </div>
    </div>
  );
};

export default Post;
