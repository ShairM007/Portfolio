import React from 'react'
import './FloatingDiv.css'
const FloatingDiv = (Props) => {
  return (
    
        <div className="floatingdiv">
            <img src={Props.image} alt="" />
            <span>
            {Props.txt1}
                <br />
                {Props.txt2}
            </span>
        </div>
   
  )
}

export default FloatingDiv