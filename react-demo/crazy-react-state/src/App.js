import React, { Component } from 'react';
import './App.css';
import { callLogin } from './serviceCalls';


import Login from './Login';
import Content from './Content';
import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      someCount: 0,
      loginShownAt: 3,
      authenticated: false
    };
    this.onLoginAttempt = this.onLoginAttempt.bind(this);
    this.bumpCount = this.bumpCount.bind(this);
  }

  bumpCount() {
    this.setState({
      someCount: this.state.someCount + 1
    });
  }

  canShowLogin() {
    return this.state.someCount >=  this.state.loginShownAt;
  }

  onLoginAttempt({ username, password }) {
    callLogin({ username, password})
    .then( ( response ) => {
      if( !response.ok ) {
        if( response.status === 401 || response.status === 403 ) {
          return Promise.reject('username/password not recognized');
        }
        return Promise.reject('Something went wrong.  Try again?');
      }
      return response.json();
    })
    .then( (loginInfo) => {
      this.setState({
        authenticated: true,
        username: loginInfo.username,
        userLevel: loginInfo.userLevel,
        loginError: ''
      });
    })
    .catch( (error) => {
      this.setState({
        loginError: error
      });
    })
    .catch( (realError) => {
      console.warn('should not happen!', realError);
    });

  }

  render() {
    let loginMessage = null;
    if(!this.canShowLogin()){
      loginMessage=`Login not available until count is ${this.state.loginShownAt}`; // This is a template literal, not a JSX {} variable evaluation
    }

    let contentOrLogin;
    if(!this.state.authenticated && this.canShowLogin()) {
      contentOrLogin = <Login onLoginAttempt={this.onLoginAttempt} loginError={this.state.loginError}/>;
    } else if (this.state.authenticated) {
      contentOrLogin = <Content username={this.state.username}/>;
    }


    return (
      <div className="App">
        <Nav
          bumpCount={this.state.someCount < 11 ? this.bumpCount : null }
          showLogin={!this.state.authenticated}
          showContent={this.state.authenticated}
        />
        <p>The count is at {this.state.someCount}.</p>
        {loginMessage}
        {contentOrLogin}
      </div>
    );
  }
}

export default App;
