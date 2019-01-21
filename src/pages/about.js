import React from 'react'
import styled from 'styled-components'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from about!!</h3>
  </Layout>
)

export default AboutPage
