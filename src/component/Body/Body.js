import React from 'react';
import Header from '../Header/Header';
import './Body.css';

function Body() {
  return (
    <div>
      <div className='body-style'>
      <Header />
        <div className='body-heading'>
          <h1 className='animate-right'>Discover</h1>
          <h4 className='animate-left'>amazing startups</h4>
          <p>Find great startups curated by our experts for investing</p>
        </div>
        <div>
          <input className='body-input' type='text' placeholder='Ex: Nearbygrocer, Nykaa, etc' />
          <button className='body-btn'>Search</button>
        </div>
      </div>
      
    </div>
  );
}

export default Body;
