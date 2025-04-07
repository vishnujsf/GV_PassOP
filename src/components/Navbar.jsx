import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
        <div className='logo font-bold text-2xl'>
            <span className='text-green-500'>&lt;</span>
            GV
            <span className='text-green-500'>PassOp /&gt;</span>
        </div>
       
        <button>
          <img className='w-20 bg-green-500 rounded-md px-1 hover:bg-green-400' src='git.png' alt='git' />
        </button>
        </div>

      
    </nav>
  )
}

export default Navbar
