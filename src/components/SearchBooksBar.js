import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './../components/Book'
import * as BooksAPI from './../api/BooksAPI'

/*
    Page used to search any book using criteria
*/
class SearchBooksBar extends Component {
    state = {
        query: '',
        books: []
    }

    /*
        Main method to search book: 
        - retrieve all books from API
        - verify the query criteria
        - filter books already shelfed using mains state books ( using props )
        - update book result with shelf of book ( if exists)
        - update state

    */

    searchBooks = (query) => {
        this.setState({ query : query })
        if(query.length===0){
            this.setState({books:[]})
        }else{
            BooksAPI.search(query).then(books => {
                this.props.books.forEach(element => {
                  const i = books.findIndex((b)=>{return b.id === element.id});
                  i !== undefined && books.splice(i,1) && books.push(element);
                });
                this.setState({books})
            })
        }
        
    }

    updateRemoteBooks(selectedBook) {
        BooksAPI.update(selectedBook, selectedBook.shelf)
                .then(res => {
                    this.setState({
                        books: this.state.books.filter(b => b.id !== selectedBook.id).concat(selectedBook)
                      })
                })
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