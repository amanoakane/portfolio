import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><span>· </span><span>· </span><span>· </span><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span><span>· </span><span>· </span><span>· </span></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/d3.jpg'
              text='Covid-19 Data Visualization'
              label='D3'
              path='https://covid19datavisualization-bzhang37.netlify.app/'
            />
            <CardItem
              src='images/akane.jpg'
              text='A blog website built with python django'
              label='Python'
              path='https://akane-bowenzhang.herokuapp.com/'
            />
            <CardItem
              src='images/simon.jpg'
              text='Simon says game built with react'
              label='React'
              path='https://simonsays-bzhang37.netlify.app/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/CRM.png'
              text='Spring Boot CRUD application with Hibernate & MySQL'
              label='Java'
              path='https://github.ncsu.edu/bzhang37/spring-boot-crud-app'
            />
            <CardItem
              src='images/ruby.jpg'
              text='A library management system built with Ruby on Rails'
              label='Ruby On Rails'
              path='/paintings'
            />

          </ul>
        </div>
        <h2 >And More...</h2>
      </div>

    </div>
  );
}

export default Cards;
