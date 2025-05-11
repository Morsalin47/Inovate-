import React from 'react'
import logo from '../../assets/logo.png'
import Container from '../Layout/Container'


const Navbar = () => {
  return (
    <div className='pt-[32px]'>   
      <Container>
      <div className='flex items-center justify-between px-6'>
        <div>
          <img src={logo} alt="Logo"/>
        </div>
        <div>
            <ul className='flex gap-[50px] font-secondary font-lg font-medium text-amber-50'>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Features</li>
                <li><a href=""></a>Service</li>
                <li><a href=""></a>Pages</li>
                <li><a href=""></a>Blog</li>
            </ul>
        </div>
        <div className='flex items-center gap-x-9'>
            <a className='font-secondary font-lg font-medium text-amber-50'>Login</a>
            <a className='font-secondary font-lg font-medium py-5 px-12 bg-secondary rounded-[6px]'>Register</a>
        </div>
      </div>
      </Container>
      
      
    </div>
  )
}

export default Navbar