import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const project = () => {
  return (
    <div>
      <Head>
        <title>Project1</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </div>
  )
}

export default project