import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './../components/Book'
import * as BooksAPI from './../api/BooksAPI'

class SearchBooksBar extends Component {
    state = {
        query: '',
        books: []
    }

    searchBooks = (query) => {
        this.setState({ query : query })
        if(query.length > 3){
            BooksAPI.search(query).then(books => {
                this.setState({books})
            })
        }
    }

    updateRemoteBooks(selectedBook) {
        BooksAPI.update(selectedBook, selectedBook.shelf)
                .then(res => ('Books updated'))
                .catch(failure => ('Update failure'))
    }    
  
    updateBook = (selectedBook) => {
      this.updateRemoteBooks(selectedBook);      
    }

    render(){
        const query = this.state.query
        const books = this.state.books
        return (
            <div className='search-books'>

                <div className='search-books-bar'>
                    <Link to='/' className='close-search'>close </Link>
                    <div className='search-books-input-wraper'/>
                    <input type='text' 
                            placeholder='Search by title or author'
                            value={ query }
                            onChange={(event) => this.searchBooks(event.target.value)}
                    />
                </div>

                <div className='search-books-results'>
                    <ol className='books-grid'>
                        { books !== undefined && books.length > 0 && (
                            books.map(book => (
                                <li key={book.id}>
                                    <Book book={book} onBookChange={this.updateBook}/>
                                </li>
                            )))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooksBar