import React from 'react'
import CtaButton from '../../../common/buttons/CtaButton'
import ExpandingCards from './ExpandingCards'

const HeroSection = () => {
  return (
    <div className='w-full'>
      <div className='absolute top-0 w-full h-full -z-10'>
        <img className='h-screen w-full object-cover' src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='house' />
      </div>
      <div className='absolute top-0 w-full h-full bg-black/80 -z-10'></div>
      <div className='m-auto'>
        <div className='absolute top-[30%] w-full md:-[50%] h-full flex'>
          <div className='w-1/2 px-24'>
            <div>
              <h1 className='leading-10 mb-10 flex flex-col gap-4 uppercase text-3xl md:text-5xl'>
                Designed & <span>Built for you</span>
              </h1>
            </div>
            <div className='mb-10'>
              <h5>Whether it's commercial, residential, or industrial projects we pour heart, soul & craftsmanship into every detail, transforming dreams into concrete reality.</h5>
            </div>
            <div>
              <CtaButton />
            </div>
          </div>
          <div className='rightCards w-1/2'>
            <ExpandingCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection