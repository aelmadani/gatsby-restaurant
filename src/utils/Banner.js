import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

export { Banner }

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.75rem;
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted}
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
