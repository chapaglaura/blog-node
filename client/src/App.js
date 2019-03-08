import React, { Component } from "react";
import Form from "./components/Form";
import Posts from "./components/Posts"; 
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  submitPost = data => {
    axios
      .post("/api/posts/add", data)
      .then(response => {
        const data = response.data;
        let posts = [...this.state.posts];
        posts.push(data);
        this.setState({
          posts: posts
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    axios.get("/api/posts").then(response => {
      const data = response.data;
      this.setState({
        posts: data
      });
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Form submitPost={this.submitPost} />
          </div>
        </div>
        
        <div className="container my-5">
          <div className="row">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
