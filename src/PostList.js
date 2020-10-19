import React from "react";
import CardItem from "./CardItem";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends React.Component {
  state = {
    items: [],
    id: 0
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  handleChange(idArg) {
    console.log(idArg);
  }

  render() {
    return (
      <div>
        <center>
          <h1>Post List</h1>
        </center>
        <CardItem items={this.state.items} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default PostList;
