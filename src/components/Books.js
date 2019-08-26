import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookEntry from './BookEntry';


class Books extends Component {

  render() {
    const { books, toggleRead, deleteEntry } = this.props;
    return (
      <tbody>
        {
          books.map((book) => (
            <BookEntry 
              book={book} 
              key={book.id}
              toggleRead={toggleRead}
              deleteEntry={deleteEntry}
            />
          ))
        }
      </tbody>
    );
  }
}

// Proptypes
Books.propTypes = {
  books: PropTypes.array.isRequired
}

export default Books;
