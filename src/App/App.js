import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Famous from '../Famous-Person/Famous-Person'

class App extends Component {

  state = { 
    user: {
      name: 'bob',
      role: ''
    }
  }

  // handleChangeFor = (propertyName) => {    
  //   return (event) => {
  //     this.setState( { 
  //       user: {
  //         ...this.person.user,
  //         [propertyName]: event.target.value 
  //       }
  //     } );
  //   }
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Famous />
      </div>
    );
  }
}


export default App;
