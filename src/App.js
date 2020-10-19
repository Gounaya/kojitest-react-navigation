import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundBody from "./NotFoundBody";
import PostList from "./PostList";
import MoreDetails from "./MoreDetails";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={PostList} exact={true} />
            <Route path="/post-item/:id" component={MoreDetails} />
            <Route component={NotFoundBody} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
