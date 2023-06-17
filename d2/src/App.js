import React, { Component } from "react";
import MyNav from "./Components/MyNav";
import './App.css';
import MainContent from "./Components/MainContent";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <MyNav />
        <MainContent />
      
      </>
    )
  }
}

export default App;
