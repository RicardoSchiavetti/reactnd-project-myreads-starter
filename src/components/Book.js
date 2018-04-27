import React from 'react'

class Book extends React.Component {
    static propTypes = {
        urlCover: PropTypes.string,
        bookTitle: PropTypes.string,
        bookSubtitle: PropTypes.string,
        author: PropTypes.string
    }

    state = {
        urlCover:'',
        bookTitle:'',
        bookSubtitle:'',
        author:''
    }

    render() {
        bookCoverStyle = {
            width:  '128px',
            height: '193px',
            backgroundImage: `url("${state.urlCover}")`            
        }

        return(
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={bookCoverStyle} >
                    </div>
                </div>
            </div>
        )
    }
}

export default Book