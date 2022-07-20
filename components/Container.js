import React from 'react'
import Nav from './Nav'
import Head from 'next/head'

export default function Container (props) {
  return (
    <div>
        <Head>
            <title>Wallet</title>
        </Head>
        <Nav/>
        <div>
            {props.children}
        </div>
    </div>
  )
}
