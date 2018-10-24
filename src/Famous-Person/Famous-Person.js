import React, { Component } from 'react';
import './Famous-Person.css';

class Famous extends Component {

    state = { 
        person: {
          name: '',
          role: ''
        }
      }

    handleChangeFor = (propertyName) => {
        return (event) => {
          this.setState( { 
            person: {
              ...this.state.person,
              [propertyName]: event.target.value 
            }
          } );
        }
      }

    buttonSubmit = (event) => {
        console.log(this.state.person);     
    }

  render() {
    return (
        <section>
        <input onChange={ this.handleChangeFor('name') } placeholder="name"/>
        <input onChange={ this.handleChangeFor('role') } placeholder="role"/>
        <input onClick={this.buttonSubmit} type="submit" value="Submit"></input>
        <p>{this.state.person.name}, is famous for {this.state.person.role}</p>
        </section>
    );    
  }  
}

export default Famous;
