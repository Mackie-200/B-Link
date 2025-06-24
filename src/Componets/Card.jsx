import React from 'react'
import logo from '../Componets/pictures/Vector.png';
import Settings from '../Componets/pictures/settings.png';
import People from '../Componets/pictures/people.png';
import "./Card.css"
const Card = () => {

    const data = [
        { image:logo, text:"At BuildLink, our verified professionals guarantee quality and reliability for every project.", title:"Verified"},
        {text:"At BuildLink, our verified professionals guarantee quality and reliability for every project.", title:"Skilled", image:"../Componets/pictures/built.png"},
        {text:"At BuildLink, our verified professionals guarantee quality and reliability for every project.", title:"Trusted", image:"../Componets/pictures/built.png"}
    ]
  return (
    <div>
        <div className="container">
            <div className="row containerImtens">
              {data.map((onedata, index)=>(
                  <div className="col-md-4 col-sm-12 cardback" key={index}>
                        <div className="logoItem">
                           {index ===0 && <img src={logo}  className='logoitemplease' alt="logo" /> }
                           {index ===1 && <img src={Settings} className='logoitemplease' alt="logo" />}
                           {index ===2 && <img src={People} className='logoitemplease' alt="logo" />}
                        </div>
                        <h3>{onedata.title}</h3>
                        <p>{onedata.text}</p>
                </div>
              ))}
            </div>
        </div>
      
    </div>
  )
}

export default Card
