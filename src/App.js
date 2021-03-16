import axios from 'axios';
import React from 'react';
import Header from './components/Header';
// import Searchbar from './components/Searchbar';
// import Table from './components/Table';

class App extends React.Component {
  state = {
    employees: [],
    search: '',
    searchedEmployees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  // handleChange = (event) => {
  //   const { value } = event.target;

  //   this.setState({ search: value });
  // };

  getEmployees = async () => {
    const { data } = await axios.get(
      'https://randomuser.me/api/?nat=us,gb,ca&results=50',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    console.log(data);
    this.setState({ employees: data.results });
  };

  // search = async () => {
  //   const {
  //     data: { results },
  //   } = await axios.get('https://randomuser.me/api/', {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   });
  //   console.log(results);
  //   this.setState({ searchedEmployees: results });
  // };

  render() {
    console.log(this.state.employees);
    return (
      <div className='container'>
        <Header />

        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Picture</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.length ? (
              this.state.employees.map(({ name, email, picture }) => {
                return (
                  <tr>
                    <td>
                      <img src={picture.medium} alt={name.first} />
                    </td>
                    <td>{name.first}</td>
                    <td>{name.last}</td>
                    <td>{email}</td>
                  </tr>
                );
              })
            ) : (
              <p>No employees to display</p>
            )}
          </tbody>
        </table>

        {/* <p>
          {this.state.employees
            ? this.state.employees.name
            : 'Better luck next time'}
        </p> */}

        {/* {this.state.employees.length &&
          this.state.employees.map((results) => {
            return (
              <ul>
                <li>{results.name.first}</li>
              </ul>
            );
          })} */}

        {/* <p>
          {this.state.employee
            ? this.state.employee.name
            : "Couldn't find employee"}
        </p>
        <button onClick={this.getEmployees}>Find All Employees</button> */}

        {/* <input
          type='text'
          value={this.state.search}
          name='search'
          onChange={this.handleChange}
        />
        <button onClick={this.search}>Search Employee</button>
        {this.state.searchedEmployees.length ? (
          this.state.searchedEmployees.map(({ name, email }) => {
            <tr>
              <td>{name.first}</td>
              <td>{name.last}</td>
              <td>{email}</td>
            </tr>;
          })
        ) : (
          <p></p>
        )} */}

        {/* <Searchbar />
        <Table /> */}
      </div>
    );
  }
}

export default App;
