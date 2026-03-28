import React from 'react'
import twitter from '../assets/icons/twitter.png'
import insta from '../assets/icons/instagram.png'
import slack from '../assets/icons/slack.png'
import linkedIn from '../assets/icons/share-linkedin.webp'
import youtube from '../assets/icons/youtube.png'


const Footer = () => {
  return (
    <>
      <div className='div-1 flex justify-evenly w-full h-1/2 text-white px-40'>
        <span className='px-5 py-20'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>use cases</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer'>For Designers</li>
                <li className='cursor-pointer'>For Developers</li>
                <li className='cursor-pointer'>For Product Managers</li>
                <li className='cursor-pointer'>For Compliance Managers</li>
            </ul>
        </span> 
        <span className='px-5 py-20'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>resources</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer hover:underline'>Blog</li>
                <li className='cursor-pointer hover:underline'>Library</li>
                <li className='cursor-pointer hover:underline'>Release Note</li>
                <li className='cursor-pointer hover:underline'>Slack Community</li>
                <li className='cursor-pointer hover:underline'>WCAG Compliance</li>
                <li className='cursor-pointer hover:underline'>Section 508 Compliance</li>
                <li className='cursor-pointer hover:underline'>European Accessibility Act (EAA) <br />Compliance</li>
            </ul>
        </span> 
        <span className='px-5 py-20'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>help</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer hover:underline'>My Account</li>
                <li className='cursor-pointer hover:underline'>Support Docs</li>
                <li className='cursor-pointer hover:underline'>Contact Us</li>
                <li className='cursor-pointer hover:underline'>Feature Requests</li>
            </ul>
        </span> 
        <span className='px-5 py-20'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>company</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer hover:underline'>Stark Framework</li>
                <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                <li className='cursor-pointer hover:underline'>Terms of Service</li>
                <li className='cursor-pointer hover:underline'>Code of Conducts</li>
            </ul>
        </span> 
      </div>
      <div className='div-2 flex justify-start gap-10 w-full h-[35%] text-white px-50'>
        <span className='px-5 mx-10'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>security</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer hover:underline'>Security Overview</li>
                <li className='cursor-pointer hover:underline'>Cookie Policy</li>
                <li className='cursor-pointer hover:underline'>AI Overview</li>
                <li className='cursor-pointer uppercase hover:underline'>gdpr</li>
                <li className='cursor-pointer hover:underline'>Status</li>
            </ul>
        </span> 
        <span className='px-5 mx-10'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>design integrations</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer hover:underline'>Stark for Figma</li>
                <li className='cursor-pointer hover:underline'>Stark for FigJam</li>
                <li className='cursor-pointer hover:underline'>Stark for Sketch</li>
                <li className='cursor-pointer hover:underline'>Stark for Adobe XD</li>
            </ul>
        </span> 
        <span className='px-5 mx-10'>
            <h4 className='text-[15px] font-bold tracking-wide uppercase'>developer integrations</h4>
            <ul className='flex flex-col gap-3 mt-3 font-semibold text-md list-none'>
                <li className='cursor-pointer hover:underline'>Stark for Chrome</li>
                <li className='cursor-pointer hover:underline'>Stark for FireFox</li>
                <li className='cursor-pointer hover:underline'>Stark for Edge</li>
                <li className='cursor-pointer hover:underline'>Stark for Safari</li>
                <li className='cursor-pointer hover:underline'>Stark for Arc</li>
                <li className='cursor-pointer hover:underline'>Stark for Brave</li>
            </ul>
        </span>
        
      </div>
      <div className='flex justify-between text-white px-50'>
        <span className='flex gap-3 list-none'>
            <li className='cursor-pointer'><img src={twitter} alt="" width={32} height={32}/></li>
            <li className='cursor-pointer'><img src={insta} alt="" width={32} height={32}/></li>
            <li className='cursor-pointer'><img src={slack} alt="" width={32} height={32}/></li>
            <li className='cursor-pointer'><img src={linkedIn} alt="" width={32} height={32}/></li>
            <li className='cursor-pointer'><img src={youtube} alt="" width={32} height={32}/></li>
        </span>
        <h3 className='text-sm text-[#fedb63] tracking-[3px] font-bold uppercase'>Made remotely with love by Stark Lab, Inc. Copyright 2026</h3>
      </div>
    </>
  )
}

export default Footer
