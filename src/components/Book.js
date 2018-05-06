import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'
class Book extends Component {
    static propTypes = {
        urlCover: PropTypes.string,
        bookTitle: PropTypes.string,
        author: PropTypes.string
    }

    render() {
       const book = this.props.book
       const bookCoverStyle = {
            width:  '128px',
            height: '193px',
            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
        }

        return(
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={bookCoverStyle}></div>
                    <BookShelfChanger/>
                </div>
                <div className='book-title'> {book.title}</div>
                { book.authors.length > 0 &&(
                    book.authors.map(author => (
                      <div key={author} className='book-authors'>{author}</div>
                    )))}
            </div>
        )
    }
}

export default Book