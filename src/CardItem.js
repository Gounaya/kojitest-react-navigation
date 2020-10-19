import React from "react";
import { Link } from "react-router-dom";

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="OneItem">
        {this.props.items ? (
          this.props.items.map((item) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{item.id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.title}</h6>
                <p class="card-text">{item.body}</p>
                <Link
                  //to="/post-item"

                  to={{
                    pathname: `/post-item/${item.id}`,
                    query: item.id
                  }}
                  onClick={() => this.props.handleChange(item.id)}
                >
                  More details ...
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1>No data</h1>
        )}
      </div>
    );
  }
}

export default CardItem;
