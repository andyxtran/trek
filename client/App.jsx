import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Login from './components/LoginForm';
import SignUp from './components/SignUpForm';
import './css/App.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'PICHICIEGO',
      avatar: "http://www.squishable.com/mm5/graphics/00000001/opensquish_pink_fairy_armadillo_303018_design.jpg"
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="main-container v-flex">
          <Header
            username={this.state.user}
            avatar={this.state.avatar}
          />

          <Route exact path="/" component={Login} />
          <Route path="/register" component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;
