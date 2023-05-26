import React from 'react'
import CardItem from './CardItem'
import '../components/Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these Thrilling Adventures!</h1>
        <br />
        <div className="cards__container">
            <div className="cards_wrapper">
                <ul className="cards__items">
                    <CardItem src="images/img-1.jpg"
                    text='Explore the Mountains!'
                    label='Trekking'
                    path='/services'/>
                    <CardItem src="images/img-3.jpg"
                    text='Explore the deep dark sea'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src="images/img-8.jpg"
                    text='Dune Bashing in the Sand'
                    label='Desert'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards