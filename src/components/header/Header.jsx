import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSosial from './HeaderSosial'

const Header = () => {
  return (
    <header>
      <section className="container header__container" id="home">
        <h5>
          Hello I'm
        </h5>
        <h1>
          Hajia Bintu
        </h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSosial />
        <div className="me">
          <img scr={Me} alt="Hajia Bintu"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </section>
    </header>
  )
}

export default Header