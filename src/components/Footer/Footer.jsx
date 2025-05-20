import React from 'react'
import Container from '../Layout/Container'
import cta from '../../assets/cta.png'
import logo2 from '../../assets/logo2.png'
import gicon from '../../assets/gicon.png'
import tweeticon from '../../assets/tweeticon.png'
import instaicon from '../../assets/instaicon.png'
import inicon from '../../assets/inicon.png'
import { IoIosSend } from "react-icons/io";

const Footer = () => {
    return (
        <section className='bg-[#F7F7FC] mt-[309px] '>
            <Container>
                <div className='relative'>
                    <div className='absolute top-[-149px] left-0 w-full'>
                        <div className='py-[100px] px-[102px] rounded-[40px] bg-no-repeat bg-cover bg-center'
                        style={{ backgroundImage: `url(${cta})` }}>
                        <div className='flex justify-between items-center'>
                            <h1 className='max-w-[577px] font-primary font-bold text-white text-[44px]'>Don’t find the answer? contact us for any query.</h1>
                            <button className='font-secondary font-lg font-medium py-5 px-12 bg-secondary rounded-[6px]'>Register</button>
                        </div>
                    </div>
                    </div>
                    <div className='flex justify-between pt-[291px]'>
                        <div>
                            <img src={logo2} alt="#logo2" />
                            <p className='mt-[26px] mb-6 font-secondary text-pera text-[16px] leading-7 max-w-[263px]'>Build a modern and creative website with Innovate.</p>
                            <div className='flex gap-2'>
                                <img src={gicon} alt="#gicon" />
                                <img src={tweeticon} alt="#tweeticon" />
                                <img src={instaicon} alt="#instaicon" />
                                <img src={inicon} alt="#inicon" />
                            </div>
                        </div>
                        <div className='flex gap-[85px] mb-[86px]'>
                            <ul>
                                <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium'>Product</h4>
                                <li className='font-secondary text-[16px] leading-[26px] mt-5'>Landingpages</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Pricing</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Benefits</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Features</li>
                            </ul>
                            <ul>
                                <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium'>Company</h4>
                                <li className='font-secondary text-[16px] leading-[26px] mt-5'>About</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Privacy Policy</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Terms & Conditions</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Partners</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Contact</li>
                            </ul>
                            <ul>
                                <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium'>Resources</h4>
                                <li className='font-secondary text-[16px] leading-[26px] mt-5'>Guides and resources</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Blog</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Tools</li>
                                <li className='font-secondary text-[16px] leading-[26px] mt-[12px]'>Support</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-secondary text-pera text-[18px] leading-8 font-medium'>Get Latest Updates</h4>
                            <p className='mt-[18px] mb-[32px] font-secondary text-pera text-[16px] leading-[26px] max-w-[285px]'>Subscribe to our newsletter and get many interesting things every week</p>
                            <div className='relative'>
                                <input type="text" className='w-[269px] h-[46px] bg-[#f7f7fc] rounded-[6px] mb-[98px]  outline-0' placeholder='Your Email Address' />
                                <button className='absolute top-[5px] right-[22px]  font-secondary font-lg font-medium h-9 w-9 bg-primary rounded-[6px] flex justify-center items-center '>
                                    <IoIosSend className='h-[22px] w-[22px] text-white'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border-t-2 border-[#D2D2D2]'>
                        <p className='mt-[24px] mb-[30px]'>© 2024 Innovate - All Right Reserved</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer