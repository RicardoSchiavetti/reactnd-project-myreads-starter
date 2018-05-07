import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'

class SearchBooksBar extends Component {
    state = {
        query: ''
    }

    searchBooks = (query) => {
        this.setState({ query: query.trim() })
    }

    render(){
        const query = this.state.query
        return(
            <div className='search-books'>

                <div className='search-books-bar'>
                    <Link to='/' className='close-search'>close </Link>
                    <div className='search-books-input-wraper'/>
                    <input type='text' 
                           placeholder='Search by title or author'
                           value={ query }
                           onChange= {(event) => this.searchBooks(event.target.value)}
                    />
                </div>

                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {}
                    </ol>

                </div>

            </div>
    )}
}

export default SearchBooksBar