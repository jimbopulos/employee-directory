import axios from 'axios';
import React from 'react';
import Header from './components/Header';
// import Searchbar from './components/Searchbar';
import Table from './components/Table';

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
    return (
      <div className='container'>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
