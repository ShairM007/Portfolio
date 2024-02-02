import React from "react";
import './Navbar.css'


export const Navbar=()=>{

    return(
        <div className="n-wrapper"> 
            <div className="n-left">
                <div className="n-name">Husnain</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Porfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className="button n-button">
                   <button>Contact</button> 
                </div>
            </div>
        
        </div>
    )
}

