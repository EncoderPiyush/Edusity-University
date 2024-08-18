import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eligendi culpa laborum quibusdam et repellendus aliquam omnis sequi odit corrupti.</p>
                <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
