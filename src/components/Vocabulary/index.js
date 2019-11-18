import React, { Component } from 'react'
import VocabularyData from '../Data/Vocabulary'
import './index.css'


export default class Books extends Component {

    render(){
        return(
            <div>
                <h3> VOCABULARY</h3>
                <div className='items'>
                    { VocabularyData.map(vocabulary =>(
                        <div key={vocabulary.id} className='item' >
                            <a href={vocabulary.linkUrl}>
                                <img src={vocabulary.imgUrl}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            )
    }
}
