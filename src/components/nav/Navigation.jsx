import React from 'react'
import './Navigation.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BsFiles} from 'react-icons/bs'

import {useState} from 'react'

const Navigation = () => {

const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav>
       <a href="#home" onClick={() => setActiveNav('#home')}className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
       <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
       <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFiles/></a>
       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Navigation