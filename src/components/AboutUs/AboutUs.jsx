import React from 'react'
import Container from '../Layout/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AboutSlider from './AboutSlider'

const AboutUs = () => {
    return (
        <section className='py-[200px] bg-[#F4FAFA]'>
            <Container>
                <div className='flex gap-[100px]'>
                    <div>
                        <div>
                            <h2 className='w-[594px] font-primary font-bold text-[46px] leading-[58px] text-tittle'>What they are talking about us?</h2>
                            <p className='w-[503px] mt-5 mb-10 font-secondary text-[18px] leading-[32px] text-pera'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                            <button className='bg-[#3639a4] text-white font-secondary font-bold text-lg leading-[32px] py-[20px] px-12 rounded-[10px]'>Get Started</button>
                        </div>
                        <div className='flex mt-[80px] gap-[120px]'>
                            <div className='relative'>
                                <div className='h-[58px] w-[58px] bg-[#C4C4C4] border-2 border-white rounded-full'></div>
                                <div className='absolute top-0 left-[25px] h-[58px] w-[58px] bg-[#C4C4C4] border-2 border-white rounded-full'></div>
                                <div className='absolute top-0 left-[50px] h-[58px] w-[58px] bg-[#C4C4C4] border-2 border-white rounded-full'></div>
                                <div className='absolute top-0 left-[75px] h-[58px] w-[58px] bg-[#C4C4C4] border-2 border-white rounded-full'></div>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <h5 className='font-primary text-[24px] leading-9 text-[#52C5B6]'>4.5</h5>
                                    <span className='ml-[8px] mr-[17px] text-[#DADBE2]'>|</span>
                                    <div>
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    </div>
                                </div>
                                <p className='font-secondary text-pera text-[18px] leading-8'>280k Total Review</p>
                            </div>
                        </div>

                    </div>
                    
                    <div>
                        <AboutSlider />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs