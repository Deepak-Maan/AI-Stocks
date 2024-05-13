import React from 'react'
import { DownArrow } from './Icons'
import companiesLogo from '../assets/images/webp/companiesLogo.webp'
import { Ellipse } from './ellipse'
const Trading = () => {
    return (
        <div className='relative overflow-x-clip'>
            <div className='absolute top-[85%] left-[-8%] hidden lg:flex'>
                <Ellipse />
            </div>
            <div className="container px-3 mx-auto">
                <h2 className='text-center text-3xl lg:text-5xl leading-7 lg:leading-12 text-white font-bold'>Take the <span className="text-gradient bg-gradient-to-b from-skyBlue to-lightBlue leading-10">first step</span> into <span className="block"><span className="text-gradient bg-gradient-to-b from-skyBlue to-lightBlue">AI Stock</span> Trading</span></h2>
                <p className=' text-lightWhite leading-4 lg:leading-6 text-sm lg:text-base font-normal text-center pt-3 lg:pt-7'>In a matter of minutes, one of our AI mentors will contact you, No <span className="sm:block">Experience Required!</span></p>
                <div className="grid lg:grid-cols-2 pt-7 lg:pt-12 mt-3">
                    <div className='order-2 lg:order-1 bg-gradient-to-b from-skyBlue to-lightBlue p-[2px] rounded-lg max-w-[558px] my-auto'>
                        <div className=" p-2 md:p-6 bg-black rounded-lg">
                            <h4 className='text-xl lg:text-2xl font-semibold leading-8 text-center text-white pb-3 lg:pb-8'>Start Trading with AI Stocks !</h4>
                            <div className="flex flex-col sm:flex-row gap-2 w-full pb-2">
                                <input className='sm:max-w-[250px] w-full sm:w-1/2 rounded-lg bg-transparent p-2 sm:p-4 focus:border-gray focus:outline-none text-white font-normal text-base leading-9 border border-gray placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="text" placeholder='First Name' />
                                <input className='sm:max-w-[250px] w-full sm:w-1/2 rounded-lg bg-transparent p-2 sm:p-4 focus:border-gray focus:outline-none text-white font-normal text-base leading-9 border border-gray placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="text" placeholder='Last Name' />
                            </div>
                            <input className='w-full mb-2 rounded-lg bg-transparent p-2 sm:p-4 focus:border-gray focus:outline-none text-white font-normal text-base leading-9 border border-gray placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal' type="email" placeholder='Email' />
                            <div className='border border-gray rounded-lg flex '>
                                <div className=' bg-blurWhite flex items-center'>
                                    <p className=' p-2 sm:p-4 text-white'>+91</p>
                                    <div className=' -translate-x-2'>
                                        <DownArrow />
                                    </div>
                                </div>
                                <input className=' bg-transparent p-2 sm:p-4  focus:outline-none text-white font-normal text-base leading-9  placeholder:text-white placeholder:text-base placeholder:leading-9 placeholder:font-normal w-full' type="number" placeholder='Number' />
                            </div>
                            <button className=' py-3 w-full bg-gradient-to-br border border-white mt-6 from-skyBlue to-lightBlue hover:from-lightBlue hover:to-skyBlue rounded text-base text-black font-bold '>Sign Up</button>
                        </div>
                    </div>
                    <div className='order-1 lg:order-2 pb-3 lg:pb-0'>
                        <img src={companiesLogo} alt="companiesLogo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trading
