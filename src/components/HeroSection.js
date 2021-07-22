import React from 'react';
// import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/jellyfish.mp4' autoPlay loop muted />
      <h1><span>B</span><span>o</span><span>w</span><span>e</span><span>n </span><span>Z</span><span>h</span><span>a</span><span>n</span><span>g</span></h1>
      <p>984-777-1036 | Raleigh, NC | bzhang37@ncsu.edu | <a href="https://www.linkedin.com/in/bzhang37">linkedin</a></p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
