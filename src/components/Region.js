"use client"
import { DataContext } from '@/contexts/DataContext'
import React, { useContext, useState } from 'react'

function Region() {
    const {setRegion} = useContext(DataContext)
    const reg = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  return (
    <select onChange={(e) => setRegion(e.target.value)}  className='w-full p-4 font-medium bg-white border-0 rounded-md shadow-md dark:bg-blue-900 max-w-50 text-gray-950 dark:text-white outline-0'>
      <option value="" className='hidden'>Filter by Region</option>
        {
            reg.map((item, i) => 
            <option className='w-full' value={item} key={i}>{item}</option>)
        }
    </select>
  )
}

export default Region