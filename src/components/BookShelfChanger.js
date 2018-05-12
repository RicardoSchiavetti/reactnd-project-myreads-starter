import React, {Component} from 'react'
/*
    Class used to change shelf of book
*/
class BookShelfChanger extends Component {

    onChange(event){
        let selectedBook = this.props.book;
        selectedBook.shelf = event.target.value;
        this.props.onBookChange(selectedBook);
    }
    
    render(){
        
        const activeBook = this.props.book;
        
        return(            
            <div className='book-shelf-changer'> 
                <select id='optShelf' onChange={this.onChange.bind(this)}>
                    <option id='optDisable' value=''selected disabled='true'> Move to...</option>
                    <option id='optCurrentlyRead' value='currentlyReading' disabled={activeBook.shelf !== undefined && activeBook.shelf === 'currentlyReading'}  > Currently Reading</option>
                    <option id='optWantRead' value='wantToRead' disabled={activeBook.shelf !== undefined && activeBook.shelf === 'wantToRead'}> Want to Read</option>
                    <option id='optRead' value='read' disabled={activeBook.shelf !== undefined && activeBook.shelf === 'read'}> Read </option>
                    <option id='optNone' value='none' disabled={activeBook.shelf === undefined || activeBook.shelf === 'none'}> None </option>
                </select>    
            </div>
        )
    }
}

export default BookShelfChanger