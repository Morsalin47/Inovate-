import React from 'react'
import Container from '../Layout/Container'
import Ficon1 from '../../assets/feature1.png'
import Ficon2 from '../../assets/feature2.png'
import Ficon3 from '../../assets/feature3.png'
import Ficon4 from '../../assets/feature4.png'
const Features = () => {
    const featuresData = [
        {
            icon: Ficon2,
            title: 'Fast and Easy to use',
            description: 'Easily to convert API with just a few clicks'
        },
        {
            icon: Ficon3,
            title: 'Safely Security',
            description: 'All customer data is encrypted'
        },
        {
            icon: Ficon4,
            title: 'Get Organized',
            description: 'From lists to boards, organize work your way. '
        }
    ]
    return (
        <section>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <img src={Ficon1} alt="" />
                    </div>
                    <div className='ml-[163px]'>
                        <h3 className='font-primary w-[553px] font-bold text-[46px] leading-[56px] text-title mb-[64px]'>
                            We provide features for your Business
                        </h3>
                        <div className='flex flex-wrap justify-between mt-[64px]'>
                            {
                                featuresData.map((item) => (
                                    <div>
                                        <img src={item.icon} alt="feature" />
                                        <h4 className='w-[212px] font-primary font-bold text-[22px] text-tittle leading-[34px] pt-14px] pb-[6px]'>{item.title}</h4>
                                        <p className='w-[220px] font-secondery text-lg text-pera leading-[32px] 
                                    mb-[40px]'>{item.description}</p>
                                    </div>
                                ))
                            }
                            <div className='mr-[40px] mt-[100px]'>
                                <div>
                                    <button className='bg-[#3639a4] text-white font-secondary font-bold text-lg leading-[32px] py-[20px] px-12 rounded-[10px]'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Features