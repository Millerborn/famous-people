import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FamousList from '../FamousList/FamousList';
import FamousForm from '../FamousForm/FamousForm';
import FamousPerson from '../FamousPerson/FamousPerson';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home'



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
      <Router>
        <div>
          <Header />
            <nav>
              <ul id="linkNav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          
          <Route exact path="/" component={Home} />
          
          <FamousForm submitPerson={this.submitPerson} 
              handleChangeFor={this.handleChangeFor} 
              newPerson={this.state.newPerson} 
          />
          <FamousPerson newPerson={this.state.newPerson} />
          <FamousList list={this.state.famousList} />
        </div>
      </Router>
    );
  }
}

export default App;
