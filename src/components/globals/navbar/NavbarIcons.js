import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class NavbarIcons extends Component {
  // the 3 SoMe icon details are put in the state.
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://www.facebook.com',
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://www.twitter.com',
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://www.instagram.com',
      },
    ],
  }
  // conent of Navbaricons is the 3 SoMe icons.
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="nooener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}
const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 7rem;
    justify-content: space-around;
  }
`
