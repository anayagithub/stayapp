import React, { Component } from 'react'
import imghero from './heroGrid.png';

export class hero extends Component {
  render() {
    return (
      <section className='herosection'>
        <img className='heroimg'src={imghero}/>
        <h1 className='heroheader'> Online experiences</h1>
        <p className='heropara'>Join unique interactive activities led by
         one-of-a-kind hosts-all without leaving
         home.</p>
      </section>
    )
  }
}

export default hero