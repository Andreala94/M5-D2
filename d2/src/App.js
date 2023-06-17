import React, { Component } from "react";
import MyNav from "./Components/MyNav";
import './App.css';
import LastRelase from "./Components/LastRelase";
import SingleCard from "./Components/SingleCard";
import Welcome from "./Components/Welcome";
import MyFooter from "./Components/MyFooter";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        
        <MyNav />
        <Welcome />
        <LastRelase />
        <MyFooter />
      
      </>
    )
  }
}

export default App;
