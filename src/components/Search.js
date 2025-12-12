import React from 'react'
import Input from './Input'
import Region from './Region'

function Search() {
  return (
    <div className='sticky top-[67px] md:top-[77.5px] gap-6 flex-col md:flex-row flex md:items-center justify-between py-6 pb-10 md:py-12'>
        <Input />
        <Region />
    </div>
  )
}

export default Search