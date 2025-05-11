import React from 'react'
import Container from '../Layout/Container'
import pricingcheck from '../../assets/pricingcheck.png'
import pricing1 from '../../assets/pricing1.png'
import pricing2 from '../../assets/pricing2.png'
import pricing3 from '../../assets/pricing3.png'

const Pricing = () => {
  return (
    <section className="pb-[160px]">
        <Container>
            <div className="text-center">
                <h1 className='max-w-[624px] m-auto font-primary font-bold text-[46px] leading-[58px] text-tittle'>
                    Pricing plans that fit your needs
                </h1>
                <p className='font-primary font-bold text-[24px] leading-[100%] text-primary mt-[39px]'>Monthly
                </p>
            </div>
            <div className='flex gap-[30px] mt-[77px]'>
                <div className='py-[40px] px-[60px] group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                    <div className='flex flex-col justify-center text-center'>
                        <img className='w-[90px] m-auto' src={pricing1} alt="#pricing1" />
                        <p className='font-primary font-bold text-[24px] leading-[36px] text-primary mt-[32px] group-hover:text-[#43E7DF]'>Personal</p>
                        <h1 className='font-primary font-bold text-[44px] leading-[54px] text-tittle mt-0.5 mb-3.5 group-hover:text-white'>$10/mth</h1>
                        <p className='font-secondary font-medium text-[18px] leading-[18px] text-pera group-hover:text-white'>Annual pricing <span className='text-primary group-hover:text-[#43E7DF]'>(save 20%)</span></p>
                    </div>
                    <ul className='flex flex-col gap-[8px] mt-[40px]'>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Calendar View</p> 
                        </li> 
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Custom Templates</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>list view</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>board view</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Assignees & Due Datess</p>
                        </li>
                    </ul>
                    <button className='font-secondary text-lg leading-[20px] bg-primary text-white group-hover:text-tittle py-[20px] px-[104px] rounded-[6px] group-hover:bg-secondary cursor-pointer mt-[40px]'>Purchase Now</button>
                </div>
                <div className='py-[40px] px-[60px] group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                    <div className='flex flex-col justify-center text-center'>
                        <img className='w-[90px] m-auto' src={pricing2} alt="#pricing2" />
                        <p className='font-primary font-bold text-[24px] leading-[36px] text-primary mt-[32px] group-hover:text-[#43E7DF]'>Team</p>
                        <h1 className='font-primary font-bold text-[44px] leading-[54px] text-tittle mt-0.5 mb-3.5 group-hover:text-white'>$25/mth</h1>
                        <p className='font-secondary font-medium text-[18px] leading-[18px] text-pera group-hover:text-white'>Annual pricing <span className='text-primary group-hover:text-[#43E7DF]'>(save 35%)</span></p>
                    </div>
                    <ul className='flex flex-col gap-[8px] mt-[40px]'>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Timeline Review</p> 
                        </li> 
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Custom fields</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Custom Templates</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Task dependencies</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Milestones Manage</p>
                        </li>
                    </ul>
                    <button className='font-secondary text-lg leading-[20px] bg-primary text-white group-hover:text-tittle py-[20px] px-[104px] rounded-[6px] group-hover:bg-secondary cursor-pointer mt-[40px]'>Purchase Now</button>
                </div>
                <div className='py-[40px] px-[60px] group hover:bg-primary transition ease-out duration-400 p-9 border-[1px] border-[#DCE7FE] rounded-[20px]'>
                    <div className='flex flex-col justify-center text-center'>
                        <img className='w-[90px] m-auto' src={pricing3} alt="#pricing3" />
                        <p className='font-primary font-bold text-[24px] leading-[36px] text-primary mt-[32px] group-hover:text-[#43E7DF]'>Enterprise</p>
                        <h1 className='font-primary font-bold text-[44px] leading-[54px] text-tittle mt-0.5 mb-3.5 group-hover:text-white'>$50/mth</h1>
                        <p className='font-secondary font-medium text-[18px] leading-[18px] text-pera group-hover:text-white'>Annual pricing <span className='text-primary group-hover:text-[#43E7DF]'>(save 40%)</span></p>
                    </div>
                    <ul className='flex flex-col gap-[8px] mt-[40px]'>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Data export & deletion</p> 
                        </li> 
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Block native integrations</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Custom branding</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Lock custom fields</p>
                        </li>
                        <li className='flex items-center gap-[15px]'>
                            <img src={pricingcheck} alt="#pricingcheck" />
                            <p className='font-secondary font-medium text-[18px] leading-[28px] text-pera group-hover:text-white'>Priority support</p>
                        </li>
                    </ul>
                    <button className='font-secondary text-lg leading-[20px] bg-primary text-white group-hover:text-tittle py-[20px] px-[104px] rounded-[6px] group-hover:bg-secondary cursor-pointer mt-[40px]'>Purchase Now</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Pricing






