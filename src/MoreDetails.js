import React from "react";
import axios from "axios";

class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.query,
      item: {}
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then((res) => {
        const item = res.data;
        this.setState({ item });
      })
      .catch(() => console.log("error : fetch error to load data"));
  }

  render() {
    return (
      <div className="MoreDetails">
        <h1>More Details about {this.props.location.query}</h1>
        <div className="card-body">
          <h5 className="card-title">{this.props.location.query}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{this.state.item.title}</h6>
          <p class="card-text">{this.state.item.body}</p>
        </div>
      </div>
    );
  }
}

export default MoreDetails;
