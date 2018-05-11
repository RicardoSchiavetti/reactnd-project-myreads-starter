import React, {Component} from 'react'
import BookShelf from './BookShelf'
import TitleApp from './TitleApp'
import SearchBar from './SearchBar'
import * as BooksAPI from '../api/BooksAPI'

class ListBooks extends Component{   
    
    state = {
        books: []
      }

    componentDidMount() {
        this.getAllRemoteBooks()
    }

    updateRemoteBooks(selectedBook){
      BooksAPI.update(selectedBook, selectedBook.shelf)
              .then(res => this.getAllRemoteBooks())
              .catch(failure => ('Update failure'))
    }

    getAllRemoteBooks(){
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
    }

    updateBook = (selectedBook) => {
      this.updateRemoteBooks(selectedBook);
      this.getAllRemoteBooks();
    }

    render(){
        const currentlyReading = this.state.books.length > 0 && this.state.books.filter(book => book.shelf ==='currentlyReading')
        const wantToRead = this.state.books.length > 0 && this.state.books.filter(book => book.shelf ==='wantToRead')
        const read = this.state.books.length > 0 && this.state.books.filter(book => book.shelf ==='read')
        
        return(
          <div className='list-books'>
          <TitleApp titleApp='MyReads'/>
          <div className='list-books-content'>
            <BookShelf category={'Currently Reading'} books={currentlyReading} onChangeShelf={this.updateBook}/>
            <BookShelf category={'Want to Read'} books={wantToRead} onChangeShelf={this.updateBook}/>
            <BookShelf category={'Read'} books={read} onChangeShelf={this.updateBook}/>
            <SearchBar/>
          </div>
        </div>
        )
    }
}

export default ListBooks