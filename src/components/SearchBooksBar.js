import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SearchBooksBar extends Component {
    render(){
        return(
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link to='/' className='close-search'>close </Link>
                    <div className='search-books-input-wraper'/>
                    <input type='text' placeholder='Search by title or author'/>
                </div>            
            </div>
        )
    }
}

export default SearchBooksBar