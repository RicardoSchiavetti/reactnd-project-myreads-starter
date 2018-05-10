import React, {Component} from 'react'

class BookShelfChanger extends Component {

    updateShelf(){
        let selectedBook = this.props.book
        let index = document.getElementById('optShelf').selectedIndex;
            console.log(index);            
        selectedBook.shelf = document.getElementById('optShelf').options[index].value;
        this.props.onBookChange(selectedBook);
    }
    
    render(){        
        return(
            <div className='book-shelf-changer'> 
                <select id='optShelf' onChange={() => this.updateShelf()}>
                    <option id='optDisable' value='disable' disabled> Move to...</option>
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