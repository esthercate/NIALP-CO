import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  text-transform: uppercase;
  border: solid 2px #e9920f;
  font-weight: 600;
  text-align: center;
  padding: 0.5rem 0;
  cursor: pointer;
  color: #e9920f;
`

const CtaButton = () => {
  return (
    <div>
      <Button className='w-1/3 rounded-md hover:text-white hover:bg-p-orange'>
        <a href='#'>Call Now</a>
      </Button>
    </div>
  )
}

export default CtaButton
