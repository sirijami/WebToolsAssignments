import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [], name: '' };
  }

  render() {
		const addHello = (e) => {
      this.setState({
        names: [...this.state.names, this.state.name],
        name: ''
      });
    };

    const changeName = (e) => {
      this.setState({ name: e.target.value });
    };

    return (
      <div className="App">
        <div className="App-header"> <img src={logo} className="App-logo" alt="logo" /> </div>
				<Hello
          addHello={ addHello }
          changeName={changeName}
          message={'Add Me'}
          names={this.state.names}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default App;
