import React from 'react'
import Container from '../Layout/Container'
import Customerbg from '../../assets/customer.png'

const Customer = () => {
  return (
    <section className='mb-[140px]'>
        <Container>
            <div className='py-[85px] rounded-[40px] bg-no-repeat bg-cover bg-center' 
            style={{ backgroundImage: `url(${Customerbg})` }}>
                <div className='flex justify-end mr-[124px]'>
                    <h1 className='max-w-[554px] font-primary font-bold text-white text-[44px]'>Trusted by 35,000+ happy customers.</h1>
                </div>
                <div className='flex justify-end gap-[40px] mr-[70px] mt-[64px]'>
                    <div>
                        <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>720+</h1>
                        <p className='max-w-[176px] font-secondary font-medium text-[17px] leading-[32px] text-white mt-2'>Over 500 business powered with us</p>
                    </div>
                    <div>
                        <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>4.9+</h1>
                        <p className='max-w-[176px] font-secondary font-medium text-[17px] leading-[32px] text-white mt-2'>Rating on google play and app store</p>
                    </div>
                    <div>
                        <h1 className='font-primary font-black text-white text-[44px] leading-[54px]'>200+</h1>
                        <p className='max-w-[176px] font-secondary font-medium text-[17px] leading-[32px] text-white mt-2'>Easily integrate with your favorite apps</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Customer