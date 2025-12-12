import Link from 'next/link'
import React from 'react'

function BackButton() {
  return (
    <Link href='/'><button className='px-12 py-2 shadow-md mb-15 lg:mb-17 text-[15px] rounded-md font-medium dark:bg-blue-900 text-blue-900 dark:text-white'>Back</button></Link>
  )
}

export default BackButton