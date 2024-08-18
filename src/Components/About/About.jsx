import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About({setPlay}) {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlay(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, saepe. Pariatur placeat eum facilis ipsam incidunt a nam mollitia amet error consequatur dolore voluptatum maiores adipisci ullam dignissimos, enim doloribus ab. Commodi aperiam dolor provident et quas iusto laudantium quos nam est molestias. Sequi nemo distinctio eaque nostrum temporibus ea accusamus recusandae repellat delectus velit veritatis maiores ad, repudiandae quisquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sit animi magnam eligendi ex, necessitatibus provident quos quo? Non quasi nobis quia. Velit, optio reiciendis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae alias voluptate aliquid corporis blanditiis quam facilis odio omnis cupiditate. Explicabo sit quaerat tenetur nemo deserunt at ratione blanditiis quod? Laudantium hic recusandae aliquid nulla beatae, odit quibusdam laboriosam rerum.</p>                        
        </div>
    </div>
  )
}

export default About
