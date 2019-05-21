import React, { Component } from "react";
import "../starter-code/src/App.css";

class App extends Component {
  render() {
    const user = {
        firstName: 'Pepe',
        lastName: 'Perez',
        avatarUrl:''
      };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
      }
     
    const displayAvartar = (user) => {
        if(user.avatarUrl){
          return <img src={user.avatarUrl} />
        } else {
          return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
        }
      }

      const element = (
        <h1>
          Hello, {formatName(user)}!
        </h1>
      );
  
      return (
        <div className="App">

        
          <h1> Hello Ironhackers! </h1>
          {element}
          {displayAvartar(user)}
        </div>
      );
  }
}

export default App;