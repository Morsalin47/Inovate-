import React from 'react'
import Container from '../Layout/Container'
import laptop from '../../assets/laptop.png'
const Banner = () => {
    return (
        <section className='relative'>
            <div className='pt-[195px] pb-[558px]'>
            <Container>
                <div className='text-center'>
                    <h1 className='w-[796px] font-primary text-[56px] font-bold m-auto leading-[64px] pt-5 py-5 text-amber-50'>Get your work done with Management Tool</h1>
                    <p className='font-secondary text-lg w-[467px] m-auto leading-[32px] py-5 mb[32px] text-amber-50'>The world's first project management platform that connects everything</p>
                    <div className='relative mt-8'>
                        <input type="text" className='w-[480px] py-5 pl-7 bg-amber-50 rounded-[6px] mb-[98px]  outline-0' placeholder='Your business email' />
                        <a className='absolute top-[5px] right-[472px]  font-secondary font-lg font-medium py-[15px] px-7 bg-secondary rounded-[6px]'>Try for free</a>
                    </div>
                </div>
            </Container>
        </div>
        <div className='absolute bottom-[-165px] left-0'>
            <img src={laptop} alt="#laptop" />
        </div>
        </section>
    )
}

export default Banner