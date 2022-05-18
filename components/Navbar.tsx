import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-slate-300'>
      <h1 className='w-full text-3xl font-bold text-slate-200'>Indie Games</h1>
      <ul className="flex">
          <li className="p-4">Home</li>
          <li className="p-4">Fakemon</li>
      </ul>
    </div>
  )
}

export default Navbar
