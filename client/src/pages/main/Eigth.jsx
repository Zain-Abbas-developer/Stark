import React, { useState } from 'react'
import img1 from '../../assets/img/workflow-designer.webp'
import img2 from '../../assets/img/workflow-developer.webp'
import img3 from  '../../assets/img/workflow-pm.webp'
import img4 from '../../assets/img/workflow-compliance.webp'

const images = [
  {
    id: '1',
    title: 'Designers',
    img: img1,
    desc: 'Create accessible designs in record time right in Figma, Sketch, and Adobe XD.'
  },
  {
    id: '2',
    title: 'Developers',
    img: img2,
    desc: 'Test and audit your code from early implementation to live product.'
  },
  {
    id: '3',
    title: 'Products Managers',
    img: img3,
    desc: 'Manage accessibility in real-time across all your projects.'
  },
  {
    id: '4',
    title: 'Compliance Managers',
    img: img4,
    desc: 'Monitor, manage and audit your accessibility posture in one place.'
  }
]

const Eigth = () => {
  const [active, setActive] = useState(0);
  
  return (
    <div className='flex'>
      <div className='absolute top-30 bottom-auto -left-115 w-[80%] h-[70vh] overflow-hidden'>
        {images.map((image, index) => (
            <img
              key={index}
              src={image.img}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500
              ${active === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            />
  ))}
      </div>
      <div className='absolute top-0 right-0 w-[60%] h-[99vh]'>
        <h3 className='text-[16px] text-[#381fd1] tracking-wider font-medium uppercase mt-15 mb-8 ml-6'>Streamlining workflows, consolidating tools</h3>
        <h1 className='text-[45px] text-[#10284b] font-extrabold tracking-wide leading-15 mb-12 ml-6'>We scale with you <br /><span className=' bg-amber-300'>across departments</span></h1>
        {/* here we using mapping function and we add images dynamically */}
        
        <div className='flex flex-col gap-3 ml-6'>
          {images.map((image, index) => (
          <span
            key={index}
            onMouseEnter={() => setActive(index)}
            className={`group w-[550px]  rounded-2xl  transition-colors px-6 py-4 cursor-pointer ${
              active === index ? 'bg-[#E5E0FF]' : 'bg-transparent' 
            }`}>
            <h4 className='text-2xl text-[#381fd1] font-bold group-hover:underline'>{image.title}</h4>
            <p className=' text-[16px] '>{image.desc}</p>
          </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Eigth
