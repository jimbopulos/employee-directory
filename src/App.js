import axios from 'axios';
import React from 'react';
import Header from './components/Header';
// import Searchbar from './components/Searchbar';
// import Table from './components/Table';

class App extends React.Component {
  state = {
    searchedEmployees: [],
    employees: [],
    search: '',
  };

  componentDidMount() {
    this.getEmployees();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ search: value });
  };

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

  //renderEmployeeSearch method
  renderEmployeeSearch = (employee) => {
    // event.preventDefault();

    const { search } = this.state;

    //setup condition so that if there is a search term, filter
    if (search !== '' && employee.name.first.indexOf(search) === -1) {
      return null;
    }
    // if not, map normally
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

  // search = async (event, employee) => {
  //   event.preventDefault();

  //   const searchedEmployees = this.state.employees
  //     .filter((employee) => {
  //       if (
  //         employee.name.first
  //           .toLowerCase()
  //           .includes(this.state.search.toLowerCase()) ||
  //         employee.name.first
  //           .toLowerCase()
  //           .includes(this.state.search.toLowerCase())
  //       ) {
  //         return true;
  //       }
  //     })
  //     .map(({ name, email, picture, cell }) => {
  //       return (
  //         <tr key={cell}>
  //           <td>
  //             <img src={picture.medium} alt={name.first} />
  //           </td>
  //           <td>{name.first}</td>
  //           <td>{name.last}</td>
  //           <td>{email}</td>
  //         </tr>
  //       );
  //     });
  //   this.setState({ searchedEmployees });
  // };

  render() {
    // console.log(this.state.employees);
    return (
      <div className='container'>
        <Header />
        <div>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='text'
              placeholder='search employees'
              aria-label='Search'
              name='search'
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button
              className='btn btn-outline-primary'
              type='submit'
              onClick={this.renderEmployeeSearch}
            >
              Search
            </button>
          </form>
        </div>

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
            {/* {this.state.employees.length ? (
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
              })
            ) : (
              <tr></tr>
            )} */}
            {this.state.employees.map((employee) => {
              return this.renderEmployeeSearch(employee);
            })}
          </tbody>
        </table>
        {/* <Searchbar />
        <Table /> */}
      </div>
    );
  }
}

export default App;
