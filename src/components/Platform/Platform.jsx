import React from 'react'
import Container from '../Layout/Container'
import platform1 from '../../assets/platform1.png'
import platform2 from '../../assets/platform2.png'
import platform3 from '../../assets/platform3.png'

const Platform = () => {
    const platformData = [
        {
            image: platform1,
            title: 'Login or sign up to be able use our platform',
            description: 'This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ',
        },
        {
            image: platform2,
            title: 'Connect your website with just a few click',
            description: 'Once your website is online, you can configure it, I will show you how to put your website online',
        },
        {
            image: platform3,
            title: 'Take some sales data that you want',
            description: 'Sell your data directly: The most straightforward method is to sell your data directly to another company.',
        },
    ]
    return (
        <div className='pt-[336px] pb-[160px]'>
            <Container>
                <div className=' px-[60px]'>
                    <div className='flex justify-between'>
                        <h3 className='w-[504px] font-primary font-bold text-[46px] text-tittle leading-[58px]'>How simple is it to use our platform?</h3>
                        <p className='w-[530px] font-secondery text-lg text-pera leading-[32px]'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.
                        </p>
                    </div>
                    <div className='flex justify-between mt-[116px]'>
                        {
                            platformData.map((item) => (
                                <div className='w-[300px] flex flex-col items-center text-center justify-center'>
                                    <img src={item.image} alt="platform" />
                                    <h4 className='font-primary font-bold text-2xl text-tittle leading-9 pt-[26px] pb-3'>{item.title}</h4>
                                    <p className='font-secondery text-lg text-pera leading-[32px] mt-5'>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Platform