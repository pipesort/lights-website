import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from '../components/Footer'
import Header from "../components/Header"
import '../css/tailwind.css'


const Layout = ({ children }) => {
  

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
