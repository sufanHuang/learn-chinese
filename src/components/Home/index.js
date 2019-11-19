import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'


export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1>Explore The World Of Learning Chinese From Here!</h1>
                        <img className='header-img' src="https://i.ibb.co/KhcgtDh/china.png"/>
                    </div>
                </div>


                <div className='flex-container'>
                    <div className='item-details'>
                        <Link to={'/vocabulary'}>
                        <h2> VOCABULARY </h2>
                        <h4> Each set includes 12 vocabulary, activities, worksheets.</h4>
                        </Link>
                    </div>
                    <div className='vocabulary-images'>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/z7jdQTK/Slide1.jpg"   alt="vocabulary"/>
                                </div>
                                <div className="carousel-item ">
                                    <img src="https://i.ibb.co/Xj9WBcr/Slide1.jpg"   alt="vocabulary"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/1GjwXYK/Slide2.jpg"   alt="vocabulary"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-container'>
                    <div className='item-details'>
                        <Link to={'/books'}>
                        <h2> BOOKS </h2>
                        <h4> Each set includes 8 sentences, a teacher book, a group reading book and a student book to make.</h4>
                        </Link>
                    </div>
                    <div className='books-images'>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/dBjJCty/Slide1.jpg"  alt="book"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/s1wbdwr/Slide1.jpg"  alt="book"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/3WqBqkL/Slide1.jpg"  alt="book"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
