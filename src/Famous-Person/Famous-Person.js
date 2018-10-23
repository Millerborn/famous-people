import React, { Component } from 'react';
import './Famous-Person.css';

class Famous extends Component {

    state = { 
        user: {
          name: '',
          role: ''
        }
      }

    handleChangeFor = (propertyName) => {
        return (event) => {
          this.setState( { 
            user: {
              ...this.state.user,
              [propertyName]: event.target.value 
            }
          } );
        }
      }

  render() {
    return (
        <section>
        <input onChange={ this.handleChangeFor('name') } placeholder="name"/>
        <input onChange={ this.handleChangeFor('role') } placeholder="role"/>
        <p>{this.state.user.name}, is famous for {this.state.user.role}</p>
        </section>
    );
  }
}

export default Famous;
