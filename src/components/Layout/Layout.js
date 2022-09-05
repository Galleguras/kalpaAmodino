import React, { useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
const Layout = ({ uri, children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
