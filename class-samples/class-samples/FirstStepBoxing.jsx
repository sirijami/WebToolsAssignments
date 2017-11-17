import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { news, events } from './fakeNews';
//import { pages } from './structure';

// give me random colors to better distinguish where a "box" is.
const nxColor = () => {
  return  '#' + (Math.floor((Math.random()*0xFFFFFF))).toString(16).slice(0,6);
};

// To make fake components - next step is to put these actually in files
// even if they still lack real content
const makeFake = (name, content) => {
  content = content || name;
  const style = {backgroundColor: nxColor(), textDecoration: 'underline'};
  return () => (
    <div data-fake-name={name} style={style}>
      {content}
    </div>
  );
};

// Current components I think I'll need at this level
// I can quickly add/remove any I want to experiment
const Body = makeFake('Body');
const Header = makeFake('Header');
const SocialMedia = makeFake('SocialMedia');
const Footer = makeFake('Footer');

class App extends Component {
  render() {
    const fakeState = {}; // representing data I can get from a service later
    return (
      <div className="App">
        <Header pages={fakeState.pages} activePage={fakeState.activePage}/>
        <Body news={fakeState.news} events = {fakeState.events}>
          <SocialMedia/>
        </Body>
        <Footer/>
      </div>
    );
  }
}

export default App;
