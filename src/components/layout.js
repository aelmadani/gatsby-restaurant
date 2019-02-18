import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/globals/navbar'

import './layout.css'
//import './bootstrap.min.css'

// this js define what is the layout of all pages.
// We can see that all pages contain a navbar plus specific content "children"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
