import React from 'react'
import { Facebook, Instagram, Linkedin } from './Icons'

const Footer = () => {
    return (
        <div>
            <div className="container mx-auto px-3 pt-[280px]">
                <div className="grid grid-cols-2">
                    <div>
                        <p className='text-4.5xl font-bold text-white leading-10 pb-3'>AI STOCKS</p>
                        <p className=' text-lightWhite text-base font-normal leading-7 '>Empowering Your Financial Future <span className="block">with Intelligent Investments</span></p>
                    </div>
                    <div>
                        <p className='text-white font-semibold leading-8 text-end'>Follow Us on</p>
                        <div>
                            <div className='flex gap-3 justify-end'>
                                <Instagram />
                                <Facebook />
                                <Linkedin />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 py-10">
                    <div>
                        <p className='text-white text-xl font-bold leading-7'>Disclaimer</p>
                        <p className='text-base font-normal text-lightWhite leading-6'>This website is not a news agency, information website, or blog. It is a webpage aimed at promotional publications that use the technique of storytelling to illustrate the scope of the services and products offered. Therefore, the story told on this page is an infomercial or advertisement for informational and functional purposes, for an understanding of the potential of what is proposed. General.</p>
                    </div>
                    <div>
                        <p className='text-white text-xl font-bold leading-7'>Risk Warning</p>
                        <p className='text-base font-normal text-lightWhite leading-6'>Investing activities involve a high level of risk and may result in the total loss of the amount invested. For this reason, these activities may not be suitable for every type of investor. You should not invest money that you cannot afford to lose.</p>
                    </div>
                </div>
            </div>
            <div className='h-[1px] bg-footerGradient'></div>
            <div className="container px-3 mx-auto">
                <div className="flex justify-between pb-24">
                    <p className='text-lightWhite cursor-pointer text-base leading-6 font-normal py-7'>Privacy Policy | Conditions</p>
                    <p className='text-lightWhite cursor-pointer text-base leading-6 font-normal py-7'>Report Abuse/ Spam | Copyright@2024</p>

                </div>
            </div>
        </div>
    )
}

export default Footer
