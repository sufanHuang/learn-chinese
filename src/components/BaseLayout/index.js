import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class BaseLayout extends Component {
    render(){
        return(
            <div>
                <div className='navbar'>
                    <div className='nav-links'>
                        <ul>
                            <li><NavLink activeClassName='selected' className='nav-link' exact to ='/'>Home</NavLink></li>
                            <li><NavLink activeClassName='selected' className='nav-link' exact to ='/about'>About</NavLink></li>
                            <li><NavLink activeClassName='selected' className='nav-link' exact to ='/vocabulary'>Vocabulary</NavLink></li>
                            <li><NavLink activeClassName='selected' className='nav-link' exact to ='/books'>Books</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
                <div className='footer'>
                    <p> @ 2019 Copyright Sufan Huang</p>
                </div>
            </div>
        )
    }
}
