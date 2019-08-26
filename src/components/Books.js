import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookEntry from './BookEntry';


class Books extends Component {

  render() {
    const books = this.props.books;
    return (
      <tbody>
        books.forEach((book) => (
          <BookEntry book={book} />
        ));
      </tbody>
    );
  }
}

// Proptypes
Books.propTypes = {
  books: PropTypes.array.isRequired
}

export default Books;
