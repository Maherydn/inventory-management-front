import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-2">
      <h3>Invetory</h3>
      <Link href={'/dashboard'} className="px-4 py-2 rounded-lg bg-blue shadow font-bold text-white hover:bg-blue-800 duration-300">Go to dashboard</Link>
   </div>
  )
}

export default page
