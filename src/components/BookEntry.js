import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BookEntry extends Component {

  render() {
    const bookEntry = [];
    const fields = Object.entries(this.props.book);
    for (const [field, value] of fields) {
      bookEntry.push(<td>value</td>);
    }

    return (
      <tr>
        bookEntry.forEach((entry) => entry);
      </tr>
    );
  }
}

// Proptypes
BookEntry.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookEntry;
