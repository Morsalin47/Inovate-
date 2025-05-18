import React from 'react'
import Container from '../Layout/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
    return (
        <section className='py-[200px] bg-[#F4FAFA]'>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <h2 className='max-w-[594px] font-primary font-bold text-[46px] leading-[58px] text-tittle'>What they are talking about us?</h2>
                            <p className='max-w-[503px] mt-5 mb-10 font-secondary text-[18px] leading-[32px] text-pera'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
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
                    <div className='relative mt-[107px]'>
                        <div className='absolute top-[-80px] left-[48px]'>
                            <div className='h-[124px] w-[124px] bg-[#C4C4C4] border-8 border-[#F7F7FC] rounded-full'></div>
                        </div>
                        <div className='bg-white max-w-[687px] rounded-[20px] shadow-[10px_10px_130px_rgba(0,0,0,0.07)] pt-[64px] px-[60px]'>
                            <p className='max-w-[567px] mt-5 mb-10 font-secondary text-[22px] leading-[44px] text-pera'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                            <div className='flex items-center'>
                                <div>
                                    <h5 className='font-primary font-bold text-[24px] leading-9 text-[#30344E]'>Robert Fox</h5>
                                    <p className='pb-[50px]'>Digital Marketer</p>
                                </div>
                                <div className='ml-[258px] mb-[51px]'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs