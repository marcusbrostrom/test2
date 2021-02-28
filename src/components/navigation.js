import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [{ title: 'Home', path: '/' }, { title: 'Portfolio', path: '/portfolio' }, { title: 'Contact me', path: '/contact-me' }, { title: 'tbc', path: '/tbc' }]
export default function Navigation () {
  return (
    <nav className='site-navigation'>
      <span>Marcus Brostrom Portfolio</span>
      <ul>
        {navLinks.map((link, index) => (<li key={index}> <Link to={link.path}>{link.title}</Link></li>))}

      </ul>
    </nav>
  )
}
