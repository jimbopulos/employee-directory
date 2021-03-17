// import React from 'react';

// const Table = ({ onClickASC, onClickDESC}) => {
//   return (
//     <table className='table table-striped'>
//       <thead>
//         <tr>
//           <th scope='col'>Picture</th>
//           <th scope='col'>First Name </th>
//           <th scope='col'>
//             Last Name
//             <button
//               className='btn btn-primary'
//               onClickASC={onClickASC}
//             >
//               <i className='fas fa-sort-alpha-down'></i>
//             </button>
//             <button
//               className='btn btn-danger'
//               onClickDESC={onClickDESC}
//             >
//               <i className='fas fa-sort-alpha-down-alt'></i>
//             </button>
//           </th>
//           <th scope='col'>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//         {this.state.search
//           ? filteredEmployees.map((employee) => {
//               return this.renderEmployeeSearch(employee);
//             })
//           : sortedEmployees.map((employee, index) => {
//               return this.renderEmployeeSearch(employee, index);
//             })}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
