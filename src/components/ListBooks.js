import React, {Component} from 'react'
import BookShelf from './BookShelf'
import TitleApp from './TitleApp'
import SearchBar from './SearchBar'

/*
  Used to list all books in application
*/
class ListBooks extends Component{
  
  updateBook = (selectedBook) => {
    this.props.onUpdateShelf(selectedBook)
  }
  
  componentDidMount(){
    this.props.onLoadShelfs()
  }

  render(){

      const currentlyReading = this.props.books.length > 0 && this.props.books.filter(book => book.shelf ==='currentlyReading')
      const wantToRead = this.props.books.length > 0 && this.props.books.filter(book => book.shelf ==='wantToRead')
      const read = this.props.books.length > 0 && this.props.books.filter(book => book.shelf ==='read')
      
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