import React from 'react'
import styled from 'styled-components'

const ImgBox1 = styled.div`
  width: 150px;
  height: 400px;
  margin: 10px;
  border-radius: 1rem;
  background: url(/assets/interior.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  transition: width 0.5s;

  &:hover {
    width: 300px;
    cursor: pointer;
  }
`
const ImgBox2 = styled.div`
  width: 150px;
  height: 400px;
  margin: 10px;
  border-radius: 1rem;
  background: url(/assets/dining.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  transition: width 0.5s;

  &:hover {
    width: 300px;
    cursor: pointer;
  }
`
const ImgBox3 = styled.div`
  width: 150px;
  height: 400px;
  margin: 10px;
  border-radius: 1rem;
  background: url(/assets/kitchen2.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  transition: width 0.5s;

  &:hover {
    width: 300px;
    cursor: pointer;
  }
`

const Title = styled.div`
  color: #13191d;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 20px;
`
const ExpandingCards = () => {
  return (
    <div className='gallery flex text-center justify-center'>
      <ImgBox1 className='img-box'>
        <Title>Project 1</Title>
      </ImgBox1>
      <ImgBox2 className='img-box'>
        <Title>project 2</Title>
      </ImgBox2>
      <ImgBox3 className='img-box'>
        <Title>project 3</Title>
      </ImgBox3>
    </div>
  )
}

export default ExpandingCards
