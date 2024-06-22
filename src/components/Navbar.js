import React, { Component } from 'react'
import imglogo from './logo.png'

export class Navbar extends Component {
  render() {
    return (
      <div className='Nav'>
        <img  className='navlogo'src={imglogo}/>
      </div>
    )
  }
}

export default Navbar