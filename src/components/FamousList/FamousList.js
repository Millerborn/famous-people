import React, { Component } from 'react';

class FamousList extends Component {

  render() {
    return (
        <div>
        <section>
          <h2>All Famous People</h2>
          <ul>
            { this.props.list.map( ( people, index ) => 
            <li key={index}>{people.name} is famous for their role in {people.role}.</li>
          ) }
          </ul>
        </section>
      </div>
    );
  }
}

export default FamousList;
