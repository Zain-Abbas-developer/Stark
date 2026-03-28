import React from 'react'

const Button = ({ children }) => {
  return (
    <>
      <button className='w-[214px] h-11 bg-[#381fd1] text-[#ffffff] rounded-md text-[.95em] font-medium text-center cursor-pointer hover:bg-[#381fd1]/90 duration-75'>{children}</button>
    </>
  )
}

export default Button
