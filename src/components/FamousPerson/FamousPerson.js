import React, { Component } from 'react';

class FamousPerson extends Component {

  render() {
    return (
        <section>
            <p>{this.props.newPerson.name},
            is famous for their role in {this.props.newPerson.role}</p>
        </section>
    );
  }
}

export default FamousPerson;

