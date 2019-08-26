import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LibraryHeader extends Component {

  render() {
    let fields =  this.props.fields;

    return (
      <thead className="libHeader">
        <tr>
          {
            fields.map((field) => (
              <th key={field}>{field}</th>
            ))
          }
        </tr>
      </thead>
    );
  }
}

// Proptypes
LibraryHeader.propTypes = {
  fields: PropTypes.array.isRequired
}

export default LibraryHeader;
