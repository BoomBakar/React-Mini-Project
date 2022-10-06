import React from 'react'
import { Button } from './Button'
import './MainSection.css'
import '../App.css'
import vid from '../videos/video-2.mp4'

export default function MainSection() {
  return (
    <div className='MainSection'>
        <video src={vid} autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <h2>What are you waiting for?</h2>
        <div className='hero-btn'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >Watch Trailer<i className='far fa-play-circle' /></Button>
        </div>
    </div>
  )
}
