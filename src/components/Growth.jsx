import React from 'react'
import nvidiaImg from '../assets/images/webp/nividiaImg.webp'
const Growth = () => {
    return (
        <div className=' container px-3 mx-auto pt-[272px]'>
            <div className="relative z-10 before:absolute before:top-[50%] before:w-[583px] after:w-[583px] before:left-[-70px]  before:rotate-180  before:h-[3px] before:bg-leftTopGradient after:absolute after:top-[50%] after:right-[-70px]  after:h-[3px] after:bg-rightTopGradient">
                <h1 className=' text-7xl font-bold leading-20 text-white text-center'>Top 7</h1>
                <h2 className=' text-5xl text-gradient bg-gradient-to-b from-[#00FFE1] to-[#6E5DF6] text-center  '>AI Stocks</h2>
            </div>
            <div className="grid grid-cols-2 gap-18 pt-20">
                <div className='my-auto'>
                    <h3 className=' text-4xl text-white font-bold leading-10'>Nvidia - AI GPU <span className="block text-gradient bg-gradient-to-b from-[#00FFE1] to-[#6E5DF6]">1 year 228% Growth</span> </h3>
                    <p className='text-base text-lightWhite -mt-3 font-normal leading-6'>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.</p>
                </div>
                <div>
                    <img src={nvidiaImg} alt="navidiaImg" />
                </div>
            </div>
        </div>
    )
}

export default Growth
