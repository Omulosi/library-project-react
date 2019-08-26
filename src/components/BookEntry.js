import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BookEntry extends Component {

  render() {
    const { book, toggleRead, deleteEntry } = this.props;

    const values = Object.values(book);
    const deleteIcon = <FontAwesomeIcon icon="trash" onClick={deleteEntry.bind(this, book.id)}/>
    const checkIcon = <FontAwesomeIcon icon="check" style={{color: '#23f'}}/>
    const timesIcon = <FontAwesomeIcon icon="times"/>
    values.push(deleteIcon);

    return (
      <tr>
        {values.map((value, ind) => {
          if (typeof value === "boolean"){
            return <td key={ind} onClick={toggleRead.bind(this, book.id)}>
                    {value? checkIcon: timesIcon}
                    </td>;
          } else {
            return <td key={ind}>{value}</td>
          }
        })}
      </tr>
    );
  }
}

// Proptypes
BookEntry.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookEntry;
