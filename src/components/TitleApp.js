import React from 'react'

function TitleApp(props) {
    return (
        <div className='list-books-title'> 
            <h1>
                {props.titleApp}
            </h1>
        </div>
    )
}

export default TitleApp;