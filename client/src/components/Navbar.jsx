import React from 'react'
import './Navbar.css'
import { BiSolidDownArrow  } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between mx-auto pt-5 w-[950px] uppercase z-50' style={{fontFamily: "inter , sans-serif"}}>  
        <ul className='flex w-fit items-center text-[#ffffff] font-bold text-[.89em]'>
            <li>
                <span className='text-white cursor-pointer hover:text-[#f3f2fc] duration-75'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Home"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z" fill="currentColor"></path></svg>
                </span>
            </li>
            <li className='dropdown w-[110px] text-center px-1 mx-[25px] cursor-pointer hover:border-2 border-white rounded duration-100 ease-in '>use cases<BiSolidDownArrow  className='inline items-center ml-2 text-[.57em]'/>
            <div className='dropdown-menu w-[650px] h-[170px] bg-white rounded mt-2.5 ml-[-30px] z-10 text-black lowercase font-normal'>
                <div className='dropdown-items'>
                    <div className="box">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>this right side of dropdown content</p>
                </div>
            </div>
            </li>
            <li className='w-20 text-center px-1 mr-[25px] cursor-pointer hover:border-2 border-white rounded duration-100 ease-in'>Pricing</li>
            <li className=' w-23 text-center px-1 mr-[25px] cursor-pointer hover:border-2 border-white rounded duration-100 ease-in'>Support</li>
            <li className='dropdown w-[120px] text-center px-1 cursor-pointer hover:border-2 border-white rounded duration-100 ease-in '>Resources<BiSolidDownArrow className='inline items-center ml-2 text-[.57em]'/>
            <div className='dropdown-menu w-[780px] h-[170px] bg-white rounded ml-[-380px] mt-[15px]'>
                <div className='dropdown-items'></div>
                <div></div>
            </div>
            </li>
        </ul>
        <div className='flex items-center gap-5 text-[#ffffff] text-[.85em] tracking-[.08em] font-bold uppercase '>
            <li className='list-none w-18 h-[30px] content-center text-center hover:border-2 border-white rounded'>
                <a href="#">Log in</a>
            </li>
            <button className='w-fit h-[30px] px-2 uppercase cursor-pointer border-2 border-white rounded-md bg-white text-[#381fd1] hover:bg-[#f3f2fc] duration-75 '>Request demo</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
