import React, {Component} from 'react'
import BookShelf from './BookShelf'
import TitleApp from './TitleApp'
import SearchBar from './SearchBar'
import * as BooksAPI from '../api/BooksAPI'

class ListBooks extends Component{   
    
    state = {
        currentlyReading : [],
        wantToRead       : [],
        read             : []
      }  

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
          for (let book of books) {
            if(book.shelf === 'currentlyReading'){
              this.setState( state => ({
                currentlyReading : state.currentlyReading.concat([book])}))
            }
            if(book.shelf === 'wantToRead'){
              this.setState( state => ({
                wantToRead: state.wantToRead.concat([book])}))
            }
            if(book.shelf === 'read'){
              this.setState( state => ({
                read: state.read.concat([book])}))
            }
          }
        }) 
      }

    render(){
        
        return(
          <div className='list-books'>
          <TitleApp titleApp='MyReads'/>
          <div className='list-books-content'>
            <BookShelf category={'Currently Reading'} books={this.state.currentlyReading}/>
            <BookShelf category={'Want to Read'} books={this.state.wantToRead}/>
            <BookShelf category={'Read'} books={this.state.read}/>
            <SearchBar/>
          </div>
        </div>
        )
    }
}

export default ListBooks