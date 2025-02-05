import React from 'react';
import { Link } from 'react-router-dom';
import landingBg from '../assets/landingPageBG.jpg'; // Import the background image
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '0 0px',
        filter: 'blur(3px)',
      }}
    >
      
    </div>
    <div className='topcontainer'>
    <div className='bgContent'>
      <div className='leftContainer'>
      <h1 style={{ fontSize: '4rem', marginBottom: '0', textAlign: 'center', lineHeight: '80px' }}>Welcome to <br></br> Plantio</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '20px' }}>
        Bring nature into your home!
      </p>
      <Link
        to="/products"
        style={{
          maxWidth: '300px',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '20px 50px',
          marginTop: '20px',
          fontSize: '1.2rem',
          backgroundColor: '#28a745',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
          
        }}
      >
        Get Started
      </Link>
      </div>
      <div>
      <p style={{ fontSize: '1.3rem', textAlign: 'center', maxWidth: '600px', marginBottom: '40px' }}>
        Your one-stop shop for beautiful houseplants!
      </p>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px' }}>
  At <strong>Plantio</strong>, we believe in the power of plants to transform spaces and enrich lives. Whether you're a seasoned plant parent or just starting your green journey, <br></br><br></br> we're here to help you find the perfect plants for your home or garden. Our carefully curated collection includes a wide variety of indoor plants, outdoor blooms, and succulents, all chosen for their beauty, quality, and ease of care. <br></br><br></br> With a passion for sustainability and a commitment to customer satisfaction, Plantio is your trusted partner in bringing nature indoors. Let’s grow together!
</p>
      </div>
     
      
    </div>
    </div>
    
    </>
  );
};

export default LandingPage;