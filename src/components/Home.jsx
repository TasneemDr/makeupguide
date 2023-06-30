import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

function Home() {
  return (
    
      <div className="start">
         <img className="image" src="https://img.freepik.com/fotos-kostenlos/verschiedene-kosmetik-zerstreut-auf-beige-tabelle_23-2148046921.jpg?size=626&ext=jpg&ga=GA1.2.1421284590.1682608003&semt=ais" /> 
        
        <div className='e'>
        <h2>WELCOME TEXT ETC</h2>
        <h4>Start your makeup guide now!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quis corporis deserunt minima porro quas, dolor, </p>
         <Link to="/questions">
        <button>Click here to start now</button>
        </Link>
        </div>

        
      </div>
  
  )
}

export default Home