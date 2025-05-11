import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from '../Layout/Container'
import Service1 from '../../assets/service1.png'
import Service2 from '../../assets/service2.png'
import Service3 from '../../assets/service3.png'
import Service4 from '../../assets/service4.png'

const Service = () => {
    return (
        <section className='py-[140px]'>
            <Container>
                <div className='text-center'>
                    <p className='font-secondary text-[20px] font-medium text-[#ff7364]'>Our Services</p>
                    <h3 className='font-primary font-bold text-[46px] leading-[58px] text-tittle my-1'>How It Works
                    </h3>
                </div>
                <div className='flex gap-[30px] my-[80px]'>
                    <div className='group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={Service1} alt="#service1" />
                        <h1 className='group-hover:text-white font-primary font-bold text-[22px] leading-[34px] text-tittle mt-[26px]'>Plan Product Roadmap</h1>
                        <p className='group-hover:text-white font-secondary max-w-[258px] text-[16px] leading-[26px] text-pera mt-2'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                        <div className='mt-[26px] mb-[25px]'>
                            <a className='group-hover:text-white font-secondary text-[16px] leading-[26px] text-primary mt-[26px] mb-[36px]'>Read More</a>
                            <FontAwesomeIcon icon={faArrowRight} className='group-hover:text-white text-primary ml-2' />
                        </div>
                    </div>
                    <div className='group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={Service2} alt="#service2" />
                        <h1 className='group-hover:text-white font-primary font-bold text-[22px] leading-[34px] text-tittle mt-[26px]'>Assign Any Work</h1>
                        <p className='group-hover:text-white font-secondary max-w-[258px] text-[16px] leading-[26px] text-pera mt-2'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
                        <div className='mt-[26px] mb-[25px]'>
                            <a className='group-hover:text-white font-secondary text-[16px] leading-[26px] text-primary mt-[26px] mb-[36px]'>Read More</a>
                            <FontAwesomeIcon icon={faArrowRight} className='group-hover:text-white text-primary ml-2' />
                        </div>
                    </div>
                    <div className='group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={Service3} alt="#service3" />
                        <h1 className='group-hover:text-white font-primary font-bold text-[22px] leading-[34px] text-tittle mt-[26px]'>Monitor Work Progress</h1>
                        <p className='group-hover:text-white font-secondary max-w-[258px] text-[16px] leading-[26px] text-pera mt-2'>Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>
                        <div className='mt-[26px] mb-[25px]'>
                            <a className='group-hover:text-white font-secondary text-[16px] leading-[26px] text-primary mt-[26px] mb-[36px]'>Read More</a>
                            <FontAwesomeIcon icon={faArrowRight} className='group-hover:text-white text-primary ml-2' />
                        </div>
                    </div>
                    <div className='group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                        <img src={Service4} alt="#service4" />
                        <h1 className='group-hover:text-white font-primary font-bold text-[22px] leading-[34px] text-tittle mt-[26px]'>Pertect Intergration</h1>
                        <p className='group-hover:text-white font-secondary max-w-[258px] text-[16px] leading-[26px] text-pera mt-2'>App integration, in a general sense, is the process of resources or capabilities from one application </p>
                        <div className='mt-[26px] mb-[25px]'>
                            <a className='group-hover:text-white font-secondary text-[16px] leading-[26px] text-primary mt-[26px] mb-[36px]'>Read More</a>
                            <FontAwesomeIcon icon={faArrowRight} className='group-hover:text-white text-primary ml-2' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='hover:bg-[#3639a4] hover:text-white font-secondary font-bold text-lg leading-[32px] py-[20px] px-12 rounded-[10px] transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE]'>View More</button>
                </div>
            </Container>
        </section>
    )
}

export default Service