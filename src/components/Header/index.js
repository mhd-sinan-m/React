import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
        <header className='top-0 w-full h-14 bg-cyan-900 flex items-center font-bold justify-center'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
  )
}

