import React from 'react'
import Head from 'next/head'
import { Main } from 'next/document'
import Hero from '../components/hero/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>NIALP Construction</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Hero />
      </div>
      
    </>
  )
}
