import React from 'react';

import Header from './components/Header';
import MainLibrary from './components/MainLibrary';

import './App.css';

class LibraryApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainLibrary />
      </div>
    );   
  }
}

export default LibraryApp;
