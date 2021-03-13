import axios from 'axios';
import React from 'react';
import Header from './components/Header';
import Table from './components/Table';

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
    return (
      <div className='container'>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
