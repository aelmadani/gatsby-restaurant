import React from 'react'
import styled from 'styled-components'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpeg'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="about us" subtitle="a little more about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
