import React from 'react';

const Searchbar = ({ value, onChange, onClick }) => {
  return (
    <div className='search-bar'>
      <form className='d-flex'>
        <input
          className='form-control me-2'
          type='text'
          placeholder='search employees'
          aria-label='Search'
          name='search'
          value={value}
          onChange={onChange}
        />
        {/* <button
          className='btn btn-outline-primary search'
          type='submit'
          onClick={onClick}
        >
          Search
        </button> */}
      </form>
    </div>
  );
};

export default Searchbar;
