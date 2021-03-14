import axios from 'axios';
import React from 'react';
// import Header from './components/Header';
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
    } = await axios.get(
      `https://randomuser.me/api/search?term=${this.state.search}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    this.setState({ searchedEmployees: results });
  };

  render() {
    //console.log(this.state.employee);
    return (
      <div className='container'>
        {/* <Header />
        <Searchbar />
        <Table /> */}
        <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <span className='navbar-brand mb-0 h1'>Employee Directory</span>
          </div>
        </nav>
        <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                name='search'
                value={this.state.search}
                onChange={this.handleChange}
              />
              <button
                className='btn btn-outline-primary'
                type='submit'
                onClick={this.search}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>(image)</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[image]</td>
              <td>Bill</td>
              <td>Withers</td>
              <td>billy@bill.com</td>
            </tr>
            <tr>
              <td>(image)</td>
              <td>John</td>
              <td>Codetrane</td>
              <td>johnny@code.org</td>
            </tr>
            {this.state.searchedEmployees.length ? (
              this.state.searchedEmployees.map(({ name, email }) => {
                <tr>
                  <td>{name.first}</td>
                  <td>{name.last}</td>
                  <td>{email}</td>
                </tr>;
              })
            ) : (
              <tr>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
