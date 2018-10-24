import React, { Component } from 'react';

class FamousForm extends Component {

  render() {
    return (
        <section>
          <h2>Add a Famous Person</h2>
        <form onSubmit={this.props.submitPerson}>
          <label htmlFor="in-name">Name: </label>
          <input id="in-name" onChange={this.props.handleChangeFor('name')} 
              value={this.props.newPerson.name}/>
          <label htmlFor="in-role">Role: </label>
          <input id="in-role" onChange={this.props.handleChangeFor('role')} 
               value={this.props.newPerson.role}/>
          <input type="submit" value="Add Famous Person" />
        </form>
        </section>
    );
  }
}

export default FamousForm;

