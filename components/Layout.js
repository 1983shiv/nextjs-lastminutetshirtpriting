import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Last Minute Tshirt Printing</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout