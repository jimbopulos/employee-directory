import axios from 'axios';
import React from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
// import Table from './components/Table';

class App extends React.Component {
  state = {
    searchedEmployees: [],
    employees: [],
    search: '',
    sortType: 'ASC',
  };

  componentDidMount() {
    this.getEmployees();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ search: value });
  };

  // fetch data from API
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

  // render employees to page
  renderEmployeeSearch = (employee) => {
    return (
      <tr key={employee.cell}>
        <td>
          <img src={employee.picture.medium} alt={employee.name.first} />
        </td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
      </tr>
    );
  };

  // search for employees by name
  search = (event) => {
    event.preventDefault();

    const { search } = this.state;

    if (
      search === this.state.employees[0].name.first ||
      search === this.state.employees[0].name.last
    ) {
      this.state.employees.map(({ name, email, picture, cell }) => {
        return (
          <tr key={cell}>
            <td>
              <img src={picture.medium} alt={name.first} />
            </td>
            <td>{name.first}</td>
            <td>{name.last}</td>
            <td>{email}</td>
          </tr>
        );
      });
    }
    this.setState({ searchedEmployees: search });
  };

  // sort employees by alphabetical order
  onSort = (sortType) => {
    this.setState({ sortType });
  };

  render() {
    const { search } = this.state;
    const filteredEmployees = this.state.employees.filter((employee) => {
      return (
        employee.name.first.toLowerCase().indexOf(search.toLowerCase()) !==
          -1 ||
        employee.name.last.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });

    const { employees, sortType } = this.state;
    const sortedEmployees = employees.sort((a, b) => {
      const isReversed = sortType === 'ASC' ? 1 : -1;
      return isReversed * a.name.last.localeCompare(b.name.last);
    });

    return (
      <div className='container'>
        <Header />
        <Searchbar
          value={this.state.search}
          onChange={this.handleChange}
          onClick={this.search}
        />
        {/* <Table
          onClickASC={() => this.onSort('ASC')}
          onClickDESC={() => this.onSort('DESC')}
          search={this.state.search}
          renderSearch={this.renderEmployeeSearch}
          filterSearch={this.filterdEmployees}
          sort={this.sortedEmployees}
        /> */}
        <div className='employee-table'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Picture</th>
                <th scope='col'>First Name </th>
                <th scope='col'>
                  Last Name
                  <button
                    className='btn btn-primary'
                    onClick={() => this.onSort('ASC')}
                  >
                    <i className='fas fa-sort-alpha-down'></i>
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => this.onSort('DESC')}
                  >
                    <i className='fas fa-sort-alpha-down-alt'></i>
                  </button>
                </th>
                <th scope='col'>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.search
                ? filteredEmployees.map((employee) => {
                    return this.renderEmployeeSearch(employee);
                  })
                : sortedEmployees.map((employee, index) => {
                    return this.renderEmployeeSearch(employee, index);
                  })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
