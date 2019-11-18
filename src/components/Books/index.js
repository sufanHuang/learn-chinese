import React, { Component } from 'react'
import BooksData from '../Data/Books'
import './index.css'


export default class Books extends Component {

    render(){
        return(
            <div>
                <h3> BOOKS </h3>
                <div className='items'>
                { BooksData.map(book =>(
                    <div key={book.id} className='item' >
                        <a href={book.linkUrl}>
                        <img src={book.imgUrl}/>
                        </a>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
