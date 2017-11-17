import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { news, events } from './fakeNews';
//import { pages } from './structure';
import { randColor } from './mocks';
import Body from './Body';
import Header from './Header';
// To make fake components - next step is to put these actually in files
// even if they still lack real content
const makeFake = (name, content) => {
  content = content || name;
  const style = {backgroundColor: randColor(), textDecoration: 'underline'};
  return () => (
    <div data-fake-name={name} style={style}>
      {content}
    </div>
  );
};

const SocialMedia = makeFake('SocialMedia');
const Footer = makeFake('Footer');

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  changeState() {
    this.setState({
      showContents: !this.state.showContents
    });
  }

  render() {
    const fakeState = {}; // representing data I can get from a service later
    console.log(this.state);
    return (
      <div className="App">
        <Header pages={fakeState.pages} activePage={fakeState.activePage}/>
        <Body news={fakeState.news} events = {fakeState.events} onClick={this.changeState.bind(this)} showContents={this.state.showContents}>
          <SocialMedia/>
        </Body>
        <Footer/>
      </div>
    );
  }
}

export default App;
