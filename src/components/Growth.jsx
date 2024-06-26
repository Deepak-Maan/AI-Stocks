import React from 'react'
import nvidiaImg from '../assets/images/webp/nividiaImg.webp'
import { Ellipse } from './ellipse'
const Growth = () => {
    return (
        <div className="overflow-x-clip relative">
            <div className='absolute -bottom-[40%] -left-[33%] hidden lg:flex z-10'>
                <Ellipse />
            </div>
            <div className=' container px-3 mx-auto sm:pt12 md:pt-24 lg:pt-[272px]'>
                <div className="relative z-10 before:absolute before:top-[60%] before:lg:top-[59%] before:w-[583px] after:w-[583px] before:left-[-70px]  before:rotate-180  before:h-[3px] before:bg-leftTopGradient after:absolute after:top-[60%] after:lg:top-[59%] after:right-[-70px]  after:h-[3px] after:bg-rightTopGradient">
                    <h1 className=' text-5xl lg:text-7xl font-bold leading-20 text-white text-center'>Top 7</h1>
                    <h2 className=' text-3xl lg:text-5xl text-gradient bg-gradient-to-b from-skyBlue to-lightBlue text-center font-bold '>AI Stocks</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-18 pt-4 lg:pt-20">
                    <div className='my-auto order-2 lg:order-1'>
                        <h3 className=' text-2xl leading-7 lg:text-4xl text-white font-bold lg:leading-10'>Nvidia - AI GPU <span className="block text-gradient bg-gradient-to-b from-skyBlue to-lightBlue">1 year 228% Growth</span> </h3>
                        <p className=' text-sm lg:text-base text-lightWhite -mt-3 font-normal leading-5 lg:leading-6'>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.</p>
                    </div>
                    <div className='order-1 lg:order-2'>
                        <img src={nvidiaImg} alt="navidiaImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Growth
