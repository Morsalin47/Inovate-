import React from 'react'
import bannerShape from '../../assets/bgshape.png'

const Header = ({children}) => {
  return (
    <div className="bg-cover bg-no-repeat bg-center"
    style={ {
      backgroundImage: `url(${bannerShape})`
    }}>{children}</div>
  )
}

export default Header
