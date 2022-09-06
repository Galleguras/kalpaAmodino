import React, { useEffect, useState } from "react"
import Footer from "../footer"
import Navbar from "../navbar/Navbar"
const Layout = ({ uri, children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
