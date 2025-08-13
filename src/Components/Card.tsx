import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

interface CardProps{
  image : string;
  title : string;
  genres : string;
  score : number;
}

const Card = ({image,title,genres,score} : CardProps) => {
  return (
    <div
    className='bg-amber-100 text-wh w-full h-70
    rounded-xl'>
      <div className="bg-amber-300 m-1 rounded-xl h-55">
        <img className='object-cover w-full h-full rounded-xl'
         src={image}/>
      </div>

      <div className='m-1 relative truncate
        text-sm
      '
      >{title}
      </div>

      <div className='flex m-1 mt-2 itmes-center gap-6 justify-around'>
        <div className="flex mr-2 ">
        {Array.from({length : Math.round(score / 2)}).map((_, i) => (
          <IoStarSharp key={i} style={{color : "#fcd34d"}} />
        ))}
      </div >

       <div className='relative text-xs mb-1 '>
          Score : {score ?? "N/A"}
       </div>
      </div>
    </div>
  )
}

export default Card