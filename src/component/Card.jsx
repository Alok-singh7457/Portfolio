import React from 'react'

const Card = ({text}) => {
  return (
    <>
    <div className=" flex flex-col items-center gap-1">
    <div className="inline-block bg-[#c37532] text-black p-2 text-[15px] rounded-3xl font-mono">{text}</div>
     <div
  className="h-0 w-0  relative border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[16px] border-t-[#c37532]"
></div>
    </div>

    </>
  )
}

export default Card
