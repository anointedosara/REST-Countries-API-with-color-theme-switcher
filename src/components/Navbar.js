import React from 'react'
import ThemeButton from './ThemeButton'

function Navbar() {
  return (
    <nav className='sticky top-0 w-full bg-white shadow-md dark:bg-blue-900'>
        <div className='max-w-[400px] md:max-w-[1300px] p-5 m-auto flex items-center justify-between'>
            <h1 className='text-gray-950 dark:text-white text-[18px] md:text-[25px] font-bold'>Where in the world?</h1>
            <ThemeButton />
        </div>
    </nav>
  )
}

export default Navbar