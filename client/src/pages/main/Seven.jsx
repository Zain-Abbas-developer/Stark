import React from 'react'
import { motion } from 'framer-motion'
import velocity from '../../assets/icons/increase-velocity.png'
import accelerate from '../../assets/icons/accelerate-compliance.png'
import reduce from '../../assets/icons/reduce-cost.png'
import mitigate from '../../assets/icons/mitigate-risk.png'

const Seven = () => {
  return (
    <>
     <h3 className='text-md text-center mt-20 text-[#381fd1] font-bold tracking-wider uppercase'>why stark?</h3>
     <h1 className='flex text-[50px] text-[#10284b] font-extrabold text-center leading-15 tracking-wide mt-10'>Build and ship inclusive software, accelerate time-to-compliance.</h1>
     <div className='flex flex-wrap gap-3 justify-center mt-10 mx-5'>
        <motion.div
            style={{ willChange: 'auto'}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.5, ease: 'easeInOut'}}
            className="w-[480px] h-[300px] bg-transparent">
            <img src={velocity} alt="" width={80} height={81} className='mb-5'/>
            <h4 className='text-[#381fd1] text-3xl font-bold'>Increase Velocity</h4>
            <p className='text-md pe-10 mt-4 font-medium'>Stark is the only end-to-end platform that helps your team find and fix accessibility issues from design and code to the live product. All this, while being up to 10x faster than any other tool in the market.</p>
        </motion.div>
        {/* second */}
        <motion.div
            style={{ willChange: 'auto'}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.6, ease: 'easeInOut'}}
            className="w-[480px] h-[300px] bg-transparent">
            <img src={accelerate} alt="" width={80} height={81} className='mb-5'/>
            <h4 className='text-[#381fd1] text-3xl font-bold'>Accelerate Compliance</h4>
            <p className='text-md pe-10 mt-4 font-medium'>Reports and Insights are available in real-time for every project in Stark. Plus, time-stamped historic reports are available at any time for up-to-date compliance reporting across departments.</p>
        </motion.div>
        {/* Third */}
        <motion.div
            style={{ willChange: 'auto'}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.7, ease: 'easeInOut'}}
            className="w-[480px] h-[300px] bg-transparent">
            <img src={reduce} alt="" width={80} height={81} className='mb-5'/>
            <h4 className='text-[#381fd1] text-3xl font-bold'>Reduce Cost</h4>
            <p className='text-md pe-10 mt-4 font-medium'>Stark’s fully integrated solution enables fixing of accessibility issues as early as first design drafts, reducing 56% of issues that typically make it into code where remediation costs can be up 100x higher.</p>
        </motion.div>
        {/* Four */}
        <motion.div
            style={{ willChange: 'auto'}}
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.8, ease: 'easeInOut'}}
            className="w-[480px] h-[300px] bg-transparent">
            <img src={mitigate} alt="" width={80} height={81} className='mb-5'/>
            <h4 className='text-[#381fd1] text-3xl font-bold'>Mitigate Risk</h4>
            <p className='text-md pe-10 mt-4 font-medium'>The entire Stark platform and all our integrations are built with enterprise-grade security. From SSO and our fully SOC2-certified platform stack to our zero-trust policy that underpins all our tool .</p>
        </motion.div>
        
     </div>
    </>
  )
}

export default Seven
