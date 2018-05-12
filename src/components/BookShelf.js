import React, {Component} from 'react'
import Book from './Book'
/*
    Class to organize books in shelf
*/
class BookShelf extends Component {

    updateShelf = (selectedBook) =>{
        this.props.onChangeShelf(selectedBook)
    }

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
                            <li key={book.id}>
                                <Book book={book} onBookChange={this.updateShelf}/>
                            </li>
                        )))}
                    </ol>
                </div>                
            </div>
    )}
}

export default BookShelf