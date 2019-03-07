import React, { Component } from "react";
import "./styles.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author: ""
    };
  }

  typeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  typeBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  typeAuthor = event => {
    this.setState({
      author: event.target.value
    });
  };

  posting(event) {
    event.preventDefault();
    this.setState({
      title: "",
      body: "",
      author: ""
    });

    return this.props.submitPost(this.state);
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mx-auto">
        <form
          onSubmit={event => {
            this.posting(event);
          }}
        >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              onChange={this.typeTitle}
              value={this.state.title}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Author"
              onChange={this.typeAuthor}
              value={this.state.author}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Content"
              onChange={this.typeBody}
              value={this.state.body}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
