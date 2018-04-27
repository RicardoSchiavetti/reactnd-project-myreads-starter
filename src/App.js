import React from 'react'
//import BookShelf from './components/BookShelf'
import TitleApp from './components/TitleApp'
import * as BooksAPI from './api/BooksAPI'
import './App.css'

/*
  Main Class to render application
*/
class BooksApp extends React.Component {

  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState({ books })
    }) 
  }
  
  state = {
    currentlyReading : [],
    wantToRead       : [],
    read             : []
  }  

  render() {
    return (
      <div className='app'>
        <div className='list-books'>
          <TitleApp titleApp='MyReads'/>
        </div>
      </div>
    )
  }
}

export default BooksApp
