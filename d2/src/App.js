import React, { Component } from "react";
import MyNav from "./Components/MyNav";
import './App.css';
import LastRelase from "./Components/LastRelase";
import SingleCard from "./Components/SingleCard";
import Welcome from "./Components/Welcome";
import MyFooter from "./Components/MyFooter";
import books from './Components/data/horrorBooks.json'

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      
      category: books,
    } 

  }

    
   resercFunc(event){
    const {category } = this.state;
    const bookfiltrer = category.filter((elemento)=>{
     return elemento.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({category: bookfiltrer})
   }


  render() {
    return (
      <>
        
        <MyNav mySearch={(input)=>{
          this.resercFunc(input)
        }}/>
        <Welcome />
        <LastRelase myBooks={this.state.category}/>
        <MyFooter />
      
      </>
    )
  }
}

export default App;
// release={this.state.search}