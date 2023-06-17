import React, { Component } from "react";


class Welcome extends Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
          
        <div class="jumbotron">
            <h1 class="display-4">Benvenuti in Libreria!</h1>
            <p class="lead">Scegliete quale libbro vi piace di più.</p>
            <hr class="my-4"></hr>
            <p>A voi la scelta.</p>
        </div>
          
      );
    }
}



export default Welcome;