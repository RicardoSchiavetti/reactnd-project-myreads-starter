import React from 'react'
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks'
import SearchBooksBar from './components/SearchBooksBar'
import * as BooksAPI from './api/BooksAPI'
import './App.css'

/*
  Main Class to render application
*/
class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getAllRemoteBooks()
  }

  updateRemoteBooks(selectedBook) {
    BooksAPI.update(selectedBook, selectedBook.shelf)
          .then(() => console.log('Shelf updated'))
          .catch(failure => console.log('Update failure: '.concat(failure)))
    this.getAllRemoteBooks()
  }

  getAllRemoteBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBook = (selectedBook) => {
    this.updateRemoteBooks(selectedBook);
    this.getAllRemoteBooks();
  }

  render() {

    const shelfedBooks = this.state.books;

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
            <ListBooks books={shelfedBooks} onUpdateShelf={this.updateBook} onLoadShelfs={this.getAllRemoteBooks}/>
        )}/>
        
        <Route exact path='/search' render={() =>(
          <SearchBooksBar books={shelfedBooks} onUpdateShelf={this.updateBook}/>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
