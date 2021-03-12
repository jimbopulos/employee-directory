import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {
    employee: null,
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=500', {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(data);
    this.setState({ employee: data });
  };

  render() {
    console.log(this.state.employee);
    return <div className='App'></div>;
  }
}

export default App;
