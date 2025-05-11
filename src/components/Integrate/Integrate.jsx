import React from 'react'
import app1 from '../../assets/app1.png'
import app2 from '../../assets/app2.png'
import app3 from '../../assets/app3.png'
import app4 from '../../assets/app4.png'
import app5 from '../../assets/app5.png'
import app6 from '../../assets/app6.png'
import app7 from '../../assets/app7.png'
import Container from '../Layout/Container'

const Integrate = () => {
  return (
    <section className='bg-[#f4fafa] py-[122px]'>
        <Container>
            <div className='flex justify-between'>
               <div className='flex flex-col justify-center'>
                    <p className='font-secondary text-[20px] font-medium text-[#ff7364]'>Integrations</p>
                    <h4 className='max-w-[587px] font-primary font-bold text-tittle text-[46px] leading-[58px] mt-1 mb-5'>
                        Easily integrate with your favorite apps
                    </h4>
                    <p className='max-w-[533px] font-secondary text-[18px] leading-[32px] text-pera mb-[40px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                    <div>
                        <button className='bg-[#3639a4] text-white font-secondary font-bold text-lg leading-[32px] py-[20px] px-12 rounded-[10px]'>Get Started</button>
                    </div>
                </div> 
                <div className='ml-[60px]'>
                    <div className='flex'>
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app1} alt="#app1" />
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app2} alt="#app2" />
                    </div>
                    <div className='flex mt-[-30px]'>
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app3} alt="#app3" />
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app4} alt="#app4" />
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app5} alt="#app5" />
                    </div>
                    <div className='flex mt-[-30px]'>
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app6} alt="#app6" />
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app5} alt="#app5" />
                        <img className='max-w-[332px] max-h-[142px] drop-shadow-app' src={app7} alt="#app7" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Integrate