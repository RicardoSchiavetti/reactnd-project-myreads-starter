import React, {Component} from 'react'
import Book from './Book'
class BookShelf extends Component {    
    render(){        
        const books = this.props.books
        const category = this.props.category
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{category}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        { books.length > 0 && (
                            books.map((book) => (
                            <li key={book.title}>
                                <Book book={book}/>
                            </li>
                        )))}
                    </ol>
                </div>                
            </div>
    )}
}

export default BookShelf