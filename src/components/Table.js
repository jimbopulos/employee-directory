import React from 'react';

const Table = () => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bill Withers</td>
          <td>billy@bill.com</td>
        </tr>
        <tr>
          <td>John Codetrane</td>
          <td>johnny@code.org</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
