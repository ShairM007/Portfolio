import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
const Services = () => {
  return (
    <div className="services">
        {/* left side div */}
        <div className="awesome">
        <span>Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit   nostrum odit! Earum vel eius asperiores 
          <br/>exercitationem   porro culpa animi unde doloribus laudantium soluta!</span>
        <a href={Resume} download>

        <button className="s-button button">Download Cv</button>
        </a>
        <div className="s-blurl blur" style={{background:'ABF1FF94'}}> </div>
  
        </div>
        {/* right side div */}
        <div className="cards">
           <div style={{left:'14rem'}}>
            <Card 
            emoji={HeartEmoji}
            heading={'Design'}
            details={'Figma  Photoshop Adobe  Adobe Xd'}
            />
            
            </div> 
           <div style={{top:'12rem',left:'-4rem'}}>
            <Card 
            emoji={Glasses}
            heading={'Developer'}
            details={'React Express Nodejs And MongoDb'}
            />
            
            </div> 
           <div style={{top:'25rem',left:'12rem'}}>
            <Card 
            emoji={Humble}
            heading={'UI/UX'}
            details={'React Express Nodejs And MongoDb'}
            />
            
            </div> 
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services