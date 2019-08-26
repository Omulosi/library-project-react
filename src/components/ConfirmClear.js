import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmClear extends Component {

  render() {
    const { clearLib, showForm, toggleConfirmForm } = this.props;
    return (
    <div className={"add-book-modal show" + showForm}>
			<span className="close" title="Click to close" onClick={toggleConfirmForm}>&times;</span>

			<div id="book-info-form" className="modal-content" >
        <p> Are you sure you want to delete the <b>Entire</b> Library?</p>
			</div>

      <button className="btn" onClick={clearLib}>Yes</button>
		</div>
    )
  }
}

// Proptypes
ConfirmClear.propTypes = {
  clearLib: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
  toggleAddForm: PropTypes.func.isRequired
}

export default ConfirmClear;
