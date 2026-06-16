import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HomeMain from '../components/HomeMain'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      
      <div style={{position:"sticky",top:"0px",left:"0px",zIndex:"9999"}}>
        <Navbar />
        </div>
        
        <div style={{ flex: 1 ,scrollBehavior:"initial"}}>
           <HomeMain />
        </div>
        
            <Footer />
    </div>
    
  )
}

export default Home