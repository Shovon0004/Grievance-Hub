import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <main className="">
                <Outlet />
            </main>
    <Footer />
    </>
  )
}

export default Layout