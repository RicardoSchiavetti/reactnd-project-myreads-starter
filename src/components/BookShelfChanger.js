import React, {Component} from 'react'

class BookShelfChanger extends Component {

    onChange(event){
        let selectedBook = this.props.book                 
        selectedBook.shelf = event.target.value;        
        this.props.onBookChange(selectedBook);
    }
    
    render(){        
        return(
            <div className='book-shelf-changer'> 
                <select id='optShelf' onChange={this.onChange.bind(this)}>
                    <option id='optDisable' value=''selected disabled> Move to...</option>
                    <option id='optCurrentlyRead' value='currentlyReading'> Currently Reading</option>
                    <option id='optWantRead' value='wantToRead'> Want to Read</option>
                    <option id='optRead' value='read'> Read</option>
                    <option id='optNone' value='none'>None</option>
                </select>    
            </div>
        )
    }
}

export default BookShelfChanger