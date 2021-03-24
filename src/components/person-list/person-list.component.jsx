import React from 'react';

import axios from 'axios';

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    const { persons } = this.state;
    return (
      <ul>
        { persons.map((person) => <li key={1}>{person.name}</li>) }
      </ul>
    );
  }
}

export default PersonList;
