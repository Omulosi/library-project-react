import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import MainLibrary from './components/MainLibrary';
import AddBook from './components/AddBook';

import './App.css';
import './index.css';


library.add(fas);


class LibraryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      addForm: false,
    }
  }

  loadLibrary() {
    return JSON.parse(localStorage.getItem('bookLib'));
  }

  componentDidMount() {

    this.setState({
      books: this.loadLibrary()
    })
  }

  save = (lib) => {
    localStorage.setItem('bookLib', JSON.stringify(lib));
  }

  handleSubmit = (bookObj) => {
    const fields = ['id', 'title', 'author', 'year', 'genre', 'pages', 'read'];
    bookObj.id = this.state.books.length + 1;
    const newObj = {};
    fields.forEach(f => {
      newObj[f] = bookObj[f];
    })

    let books = this.state.books.concat(newObj);
    this.save(books);
    this.setState({
      books: books
    })
  }

  toggleRead = (id) => {
    this.setState({
      books: this.state.books.map((book) => {
        if (book.id === id) {
          book.read = !book.read;
        }
        return book;
      })
    })
  }

  deleteEntry = (id) => {
    let books = this.state.books.filter(book => book.id !== id);
    this.save(books);
    this.setState({
      books: books
    })
  }

  toggleAddForm = () => {
    this.setState({
      addForm: !this.state.addForm
    })
  }

  render() {
    const fields = ['id', 'title', 'author', 'year', 'genre', 'pages', 'read', 'delete'];
    const {books, addForm} = this.state;
    
    let showForm = '';
    if (addForm) {
      showForm = 'show';
    }

    return (
      <div>
        <Header />
        <AddBook handleSubmit={this.handleSubmit} showForm={showForm}
          toggleAddForm={this.toggleAddForm}/>
        <MainLibrary 
          books={books} 
          toggleRead={this.toggleRead}
          deleteEntry={this.deleteEntry}
          fields={fields}
          toggleAddForm={this.toggleAddForm}
        />
      </div>
    );   
  }
}


export default LibraryApp;
