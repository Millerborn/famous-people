import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FamousList from '../FamousList/FamousList';
import FamousForm from '../FamousForm/FamousForm';


class App extends Component {

  state = {
    newPerson: {
      name: '',
      role: ''
    },
    famousList: [ ],
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newPerson: {
        ...this.state.newPerson,
        [propertyName]: event.target.value,
      }
    })
  }

  submitPerson = (event) => {
    event.preventDefault();
    console.log('Saving new Famous Person', this.state.newPerson);
    this.setState({
      newPerson: {
          name: '',
          role: '',
      },
      famousList: [...this.state.famousList, this.state.newPerson],
    })        
  } 

  render() {
    return (
      <div>
        <Header />
        <FamousForm submitPerson={this.submitPerson} 
            handleChangeFor={this.handleChangeFor} 
            newPerson={this.state.newPerson} />
        <FamousList list={this.state.famousList} />
      </div>
    );
  }
}

export default App;
