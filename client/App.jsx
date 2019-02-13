import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUpForm';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='main-container v-flex'>
          <Route exact path='/' component={LoginForm} />
          <Route path='/register' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App;
