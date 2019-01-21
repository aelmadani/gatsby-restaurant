import React from 'react'
import styled from 'styled-components'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby!!</h3>
    <ButtonWrapper>Click ME!!!</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: var(--mainColor);
  color: white;
  height: 2rem;
`

export default IndexPage
