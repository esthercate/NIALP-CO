import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img
        className='h-screen w-full object-cover'
        src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        alt='house'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] h-full flex flex-col'>
          <h1>We Build your Dream Home</h1>
          <p>Transforming Houses into Homes with Expert Craftsmanship.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection