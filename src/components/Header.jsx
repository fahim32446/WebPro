import React from 'react'
import Icon from '../image/icon.png'
import Text from '../image/text.png'
import SocialIcon from '../image/3.png'


const Header = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex h-[70px] border items-center justify-around'>

        <div className='flex gap-2'>
          <img className='h-10' src={Icon} alt="Logo" />
          <img className='h-10' src={Text} alt="Logo" />
        </div>
        <div>
        <img className='h-4' src={SocialIcon} alt="Logo" />

        </div>
        <div>
          <div className='flex gap-5 text-[17px] font-medium'>
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">BLOG</a>
            <a href="#">SERVICE</a>
            <a href="#">PAGE</a>
            <a href="#">CONTACT US</a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Header