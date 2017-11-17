import React, { Component } from 'react';
import './App.css';

import { login, logout, register, loadAll, addItem } from './services';
import validations from './validations';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Content from './Content';
import RegisterLink from './RegisterLink';
import ErrorMsg from './ErrorMsg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'login',
      scratchpad: {},
    };
    this.handleErrors = this.handleErrors.bind(this);
  }

  clearErrors() {
    this.setState({error: null});
  }
  handleErrors(error) {
    error = error.error || error;
    if(error) { this.setState({error}); }
  }

  loadItems() {
    loadAll({token: this.state.token})
    .then( ({details}) => {
      this.setState({
        items: details || []
      });
      this.clearErrors();
    })
    .catch( this.handleErrors );
  }

  attemptLogin () {
    const {username, password} = this.state.scratchpad;
    login({ username, password })
    .then( ({status, token}) => {
      this.setState({
        token,
        username,
        mode: 'main'
      });
      this.clearErrors();
      this.loadItems();
    })
    .catch( this.handleErrors );
  }

  attemptLogout() {
    const { username, token } = this.state;
    this.setState({
      username: '',
      token: '',
      mode: 'login'
    });
    logout({ username, token })
    .catch( error => console.warn(error) );
  }

  attemptRegister() {
    const {username, password} = this.state.scratchpad;
    if(!this.validate('register')){
      return;
    }
    register({ username, password })
    .then( (result) => {
      const { status, token } = result;
      if( status === 'user created' ) {
        this.setState({
          token,
          username,
          mode: 'main'
        });
        this.loadItems();
        this.clearErrors();
      } else {
        this.handleErrors(result);
      }
    })
    .catch( this.handleErrors  );
  }

  itemAdd() {
    const items = this.state.items || [];
    if(!this.validate('item')) {
      return;
    }
    addItem({
      token: this.state.token,
      item: {
        toStore: [
          ...items, {
            name: this.state.scratchpad.itemName,
            desc: this.state.scratchpad.itemDesc
          }
        ]
      }
    })
    .then( ({details}) => {
      this.setState({
        items: details || []
      });
      this.clearErrors();
    })
    .catch( this.handleErrors );
  }

  navigate(dest) {
    this.setState({
      mode: dest,
      scratchpad: {}
    });
    this.clearErrors();
  }

  validate(form) {
    form = form.split('.')[0] || form;
    if(validations[form]) {
      const errors = validations[form](this.state.scratchpad);
      if(errors.length) {
        this.setState({error: errors[0]});  // only show the first problem
        return false;
      }
      return true;
    }
    return true;
  }

  addToScratch(key, e) {
    const value = e.target.value;
    const pad = this.state.scratchpad;
    const field = key.split('.')[1] || key;
    this.setState({
      scratchpad: {...pad, [field]: value}  // The object spread operator is getting transpiled
    });
    this.clearErrors();
  }

  render() {
    const { mode, error, username } = this.state;
    return (
      <div className="App">
        Welcome to a demo{username && `, ${username}`}
        { username && <Logout onLogout={this.attemptLogout.bind(this)}/> }
        { mode === 'login' && <Login
          toLogin={this.attemptLogin.bind(this)}
          enterUsername={this.addToScratch.bind(this, 'username')}
          enterPassword={this.addToScratch.bind(this, 'password')}
        />}
        { mode === 'login' && <RegisterLink
          onClick={this.navigate.bind(this, 'register')}
        /> }
        { mode === 'register' && <Register
          toRegister={this.attemptRegister.bind(this)}
          enterUsername={this.addToScratch.bind(this, 'register.username')}
          enterPassword={this.addToScratch.bind(this, 'register.password')}
          enterConfirm={this.addToScratch.bind(this, 'register.confirm')}
          toCancel={this.navigate.bind(this, 'login')}
          isValid={!error}
        /> }
        { error && <ErrorMsg error={error}/> }
        { mode === 'main' && <Content
          items={this.state.items}
          onItemAdd={this.itemAdd.bind(this)}
          onItemNameChange={this.addToScratch.bind(this, 'item.name')}
          onItemDescChange={this.addToScratch.bind(this, 'item.name')}
        />}
      </div>
    );
  }
}

export default App;
