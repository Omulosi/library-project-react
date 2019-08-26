
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      year: '',
      genre: '',
      pages: '',
      read: false
    }
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }


  render() {
    const {showForm, toggleAddForm} = this.props;
    return (
    <div className={"add-book-modal " + showForm}>
			<span className="close" title="Click to close" onClick={toggleAddForm}>&times;</span>

			<div id="book-info-form" className="modal-content" >
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="Title">Title</label>
          <input type="text" name="title" id="title" required placeholder="Title"
            value={this.state.title} onChange={this.handleChange}/>

					<label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" required placeholder="Author"
            onChange={this.handleChange}/>

					<label htmlFor="year">Year</label>
          <input type="number" name="year" id="year" min='1600' max='2099' required 
            value={this.state.year}
            onChange={this.handleChange}/>

					<label htmlFor="genre">Genre</label>
          <input type="text" name="genre" id="genre" required placeholder="Genre"
           onChange={this.handleChange}/>

					<label htmlFor="pages">Pages</label>
          <input type="number" name="pages" id="pages" required placeholder="Number of Pages"
            onChange={this.handleChange}/>

					<button type="submit" id="add-book" onClick={toggleAddForm}>Add New Book</button>
				</form>
			</div>
		</div>
    )
  }
}

// Proptypes
AddBook.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default AddBook;
