import React, {Component} from 'react'

class BookShelfChanger extends Component {

    updateShelf = (book, newShelf) =>{
        this.props.onBookChange(book, newShelf)
    }
    
    render(){
        const selectedBook = this.props.book
        return(
            <div className='book-shelf-changer'> 
                <select>
                    <option value='none' disabled> Move to...</option>
                    <option value='currentlyReading' onClick={() => this.updateShelf(selectedBook, 'currentlyReading')}> Currently Reading</option>
                    <option value='wantToRead' onClick={() => this.updateShelf(selectedBook, 'wantToRead')}> Want to Read</option>
                    <option value='read' onClick={() => this.updateShelf(selectedBook, 'read')}> Read</option>
                    <option value='none' onClick={() => this.updateShelf(selectedBook, 'none')}>None</option>
                </select>    
            </div>
        )
    }
}

export default BookShelfChanger