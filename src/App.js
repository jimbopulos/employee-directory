import axios from 'axios';
import React from 'react';
import Header from './components/Header';
// import Searchbar from './components/Searchbar';
// import Table from './components/Table';

class App extends React.Component {
  state = {
    employee: null,
    search: '',
    searchedEmployees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ search: value });
  };

  getEmployees = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=100', {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(data);
    this.setState({ employee: data });
  };

  search = async () => {
    const {
      data: { results },
    } = await axios.get('https://randomuser.me/api/', {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(results);
    this.setState({ searchedEmployees: results });
  };

  render() {
    //console.log(this.state.employee);
    return (
      <div className='container'>
        <Header />
        <p>
          {this.state.employee
            ? this.state.employee.name
            : "Couldn't find employee"}
        </p>
        <button onClick={this.getEmployees}>Find All Employees</button>

        <input
          type='text'
          value={this.state.search}
          name='search'
          onChange={this.handleChange}
        />
        <button onClick={this.search}>Search Employee</button>
        {this.state.searchedEmployees.length ? (
          this.state.searchedEmployees.map(({ name, email }) => {
            <p>
              {name.first} {name.last} {email}
            </p>;
          })
        ) : (
          <p></p>
        )}

        {/* <Searchbar />
        <Table /> */}
      </div>
    );
  }
}

export default App;
