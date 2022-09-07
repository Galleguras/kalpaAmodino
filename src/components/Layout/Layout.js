import React, { useEffect, useState } from "react"
import Footer from "../footer"
import Navbar from "../navbar/Navbar"
import { Container, Box } from "@mui/material"
const Layout = ({ uri, children }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters="true"
      sx={{
        background: "whitesmoke",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/*    <Navbar /> */}
      {children}
      {/*   <Footer /> */}
    </Container>
  )
}

export default Layout
