import React from 'react'
import { BsCollectionPlayFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa'
import { GrHistory } from 'react-icons/gr';
interface NavProps {
  handleInputChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const Nav = ({handleInputChange} : NavProps) => {
  return (
    <nav className='flex fixed top-0  bg-black w-full border-b-2 border-[#d7d752] justify-between items-center p-5 z-[999] text-white'>
      <div
        className='text-3xl'
      >Sugoi
      <span
        style={{color : '#d7d752'}}
      >
        Picks</span></div>
      
    <div className="relative">
      <FaSearch className='  z-10 absolute left-3 
        top-1/2 transform -translate-y-1/2
      '/>
      <input 
       name='name'
       type="text"
       onChange={handleInputChange}
       placeholder='Enter Genre...'
       className=' py-3 px-5 border-0   rounded-2xl relative w-[14rem] pl-12
       focus:outline-none
       focus:bg-black
        1
      focus:ring-2 focus:ring-amber-300
       '
      />
    </div>

    <div className="flex gap-10 mr-[3rem]">
      <a href="#">
        <GrHistory className='w-[1.2rem] h-[1.5rem] ' style={{color : '#d7d752'}}/>
      </a>

      <a href="#">
        <BsCollectionPlayFill className='w-[1.2rem] h-[1.5rem]' style={{color : '#d7d752'}}/>
      </a>

      <a href="#">
        <CgProfile className='w-[1.2rem] h-[1.5rem]' style={{color : '#d7d752'}}/>
      </a>
    </div>   
    </nav>  
  )
}

export default Nav