import React from 'react'
import { DownArrow } from './Icons'
import companiesLogo from '../assets/images/webp/companiesLogo.webp'
const Trading = () => {
    return (
        <div>
            <div className="container px-3 mx-auto">
                <h2 className='text-center text-5xl leading-12 text-white font-bold'>Take the <span className="text-gradient bg-gradient-to-b from-skyBlue to-lightBlue leading-10">first step</span> into <span className="block"><span className="text-gradient bg-gradient-to-b from-skyBlue to-lightBlue">AI Stock</span> Trading</span></h2>
                <p className=' text-lightWhite text-base font-normal text-center pt-7'>In a matter of minutes, one of our AI mentors will contact you, No <span className="block">Experience Required!</span></p>
                <div className="grid lg:grid-cols-2 pt-12 mt-3">
                    <div className='bg-gradient-to-b from-skyBlue to-lightBlue p-[2px] rounded-lg max-w-[558px] my-auto'>
                        <div className="p-6 bg-black rounded-lg">
                            <h4 className='text-2xl font-semibold leading-8 text-center text-white'>Start Trading with AI Stocks !</h4>
                            <div className="flex gap-2 w-full pb-2">
                                <input className='max-w-[250px] w-1/2 rounded-lg bg-transparent p-4 focus:border-gray focus:outline-none text-white font-normal text-base leading-9 border border-gray placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="text" placeholder='First Name' />
                                <input className='max-w-[250px] w-1/2 rounded-lg bg-transparent p-4 focus:border-gray focus:outline-none text-white font-normal text-base leading-9 border border-gray placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="text" placeholder='Last Name' />
                            </div>
                            <input className='w-full mb-2 rounded-lg bg-transparent p-4 focus:border-gray focus:outline-none text-white font-normal text-base leading-9 border border-gray placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="email" placeholder='Email' />
                            <div className='border border-gray rounded-lg flex '>
                                <div className=' bg-blurWhite flex items-center'>
                                    <p className='p-4 text-white'>+91</p>
                                    <div className=' -translate-x-2'>
                                        <DownArrow />
                                    </div>
                                </div>
                                <input className=' bg-transparent p-4  focus:outline-none text-white font-normal text-base leading-9  placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="number" placeholder='Number' />
                            </div>
                            <button className=' py-3 w-full bg-gradient-to-br border border-white mt-6 from-skyBlue to-lightBlue hover:from-lightBlue hover:to-skyBlue rounded text-base text-black font-bold '>Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <img src={companiesLogo} alt="companiesLogo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trading
