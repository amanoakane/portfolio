import React  from 'react';
import '../Paintings.css'
import PicItem from '../PicItem';

export default function Paintings() {
  return (
    <>
    <div className='pics'>
      <h1><span>· </span><span>· </span><span>· </span><span>D</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l </span><span>A</span><span>r</span><span>t</span><span>s</span><span>· </span><span>· </span><span>· </span></h1>
      <div className='pics__container'>
        <div className='pics__wrapper'>
          <ul className='pics__items'>
            <PicItem src='images/mayoi2.jpg' />
            <PicItem src='images/1.jpg' />
            <PicItem src='images/2.jpg'/>
            <PicItem src='images/3.jpg'/>
            
            </ul>
          <ul className='pics__items'>
          <PicItem src='images/4.jpg'/>
            <PicItem src='images/5.jpg'/>
            <PicItem src='images/6.jpg'/>
            <PicItem src='images/7.jpg'/>
          </ul>
          <ul className='pics__items'>
          <PicItem src='images/8.jpg'/>
            <PicItem src='images/9.jpg'/>
            <PicItem src='images/10.jpg'/>
            <PicItem src='images/11.jpg'/>
          </ul>
          <ul className='pics__items'>
          <PicItem src='images/12.jpg'/>
            <PicItem src='images/13.jpg'/>
            <PicItem src='images/14.jpg'/>
          </ul>
          
        </div>
      </div>
    </div>
    </>
  );
}
