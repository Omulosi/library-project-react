import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Books from './Books';
import LibraryHeader from './LibraryHeader';


class MainLibrary extends Component {

  render() {
    const { books, toggleRead, deleteEntry, fields, toggleAddForm } = this.props;
    return (
      <div className=" container main">
        <div>
          <button onClick={toggleAddForm} className='btn'>Add New Book</button>
        </div>
        <table>
          <LibraryHeader fields={fields}/>
          <Books 
            books={books}
            toggleRead={toggleRead}
            deleteEntry={deleteEntry}
          />
        </table>
      </div>
    );
  }
}

// Proptypes
MainLibrary.propTypes = {
  books: PropTypes.array.isRequired
}

export default MainLibrary;
