import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

// Navbar
export default class Navbar extends Component {
  state = {
    navbarOpen: false, // is navbar open??
  }

  // method that open/close navbar links
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  // content of navbar (each in a seperate js)
  // 1) Navbar header with logo and nav button
  // 2) Navbar links
  // 3) SoMe icons

  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

// style of Navbar
const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .toggle-icon {
      font-size: 1.75rem;
      color: yellow;
      cursor: pointer;
    }
  }
`
