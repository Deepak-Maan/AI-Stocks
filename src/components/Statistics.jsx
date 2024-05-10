import React from 'react'
import { Ellipse } from './ellipse'

const Statistics = () => {
    const crd = [{
        number: "01",
        para: "Places left to register",
    },
    {
        number: "135",
        para: "Average Registrations per day",

    },
    {
        number: "5X",
        para: "The Average Earnings Increase",
    },

    ]
    const cardsdata = crd.map((crd, i) => (
        <div key={i} className=' flex  items-center flex-col pt-7 sm:pt-8 md:pt-14 lg:pt-20'>
            <div className=' flex justify-center items-center rounded-full p-2  bg-gradient-to-b from-skyBlue to-lightBlue max-w-[170px] min-h-[170px]  lg:max-w-[270px] lg:min-h-[270px] w-full '>
                <div className='bg-black rounded-full h-full w-full flex items-center justify-center'>
                    <h4 className='  text-white font-bold  leading-25 text-5xl lg:text-8xl text-center'>{crd.number}</h4>
                </div>
            </div>
            <p className=' pt-3 sm:pt-8 lg:pt-11 font-semibold text-2xl lg:text-4xl text-white max-w-[262px] text-center leading-7 lg:leading-10'>{crd.para}</p>

        </div>

    ))
    return (
        <div className=' py-7 sm:pt-12 md:py-24 lg:py-[269px] bg-black relative overflow-x-clip'>
            <div className='absolute top-[65%] left-[-8%] hidden lg:flex'>
                <Ellipse />
            </div>
            <div className='absolute top-[65%] right-[-10%] hidden lg:flex'>
                <Ellipse />
            </div>
            <div className=' container mx-auto px-3'>
                <h2 className=' text-white font-bold text-3xl leading-7 lg:text-5xl text-center'><span className='text-gradient bg-gradient-to-b from-skyBlue to-lightBlue'>Statistics</span> For Today</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {cardsdata}
                </div>
            </div>
        </div>
    )
}

export default Statistics