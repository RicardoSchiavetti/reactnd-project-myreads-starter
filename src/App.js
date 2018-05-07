import React from 'react'
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks'
import SearchBooksBar from './components/SearchBooksBar'

import './App.css'

/*
  Main Class to render application
*/
class BooksApp extends React.Component {

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
            <ListBooks/>
        )}/>
        
        <Route exact path='/search' render={() =>(
          <SearchBooksBar/>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
