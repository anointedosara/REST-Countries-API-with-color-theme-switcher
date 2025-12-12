"use client"
import { DataContext } from '@/contexts/DataContext'
import React, { useContext } from 'react'

function Input() {
    const {name, handleName} = useContext(DataContext)
  return (
    <div className='shadow-md max-w-[500px] bg-white dark:bg-blue-900 max-w-[200px] w-full rounded-md'>
        <input className='w-full p-4 border-0 outline-0 dark:text-white' type="text" value={name} onChange={handleName} placeholder='Search for a country...' />
    </div>
  )
}

export default Input