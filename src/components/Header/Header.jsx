import React from 'react'
import bannerShape from '../../assets/bgshape.png'
import Container from '../Layout/Container'

const Header = ({ children }) => {
  return (
    <section>
      <div className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bannerShape})`
        }}>{children}</div>

    </section>
  )
}

export default Header
