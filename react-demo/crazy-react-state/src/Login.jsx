import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  updatePassword(e) {
    this.setState({
     password: e.target.value
    });
  }


  render() {
    const doLogin = () => {
      this.props.onLoginAttempt({
        username: this.state.username,
        password: this.state.password
      });
      this.setState({
        password: ''
      });
    };
    return (
      <div>
        { !this.state.password && this.props.loginError }
        <div>
         User (try 'cat'): <input onChange={this.updateUsername}/>
        </div>
        <div>
          Password (anything): <input type="password" onChange={this.updatePassword}/>
        </div>
        <button disabled={!this.state.username || !this.state.password} onClick={ doLogin }>Login</button>
      </div>
    );
  }
}

export default Login;
