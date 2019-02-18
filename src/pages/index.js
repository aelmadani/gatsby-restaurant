import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/homeBcg.jpeg'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import QuickInfo from '../components/HomepageComponents/QiuckInfo'

// Landing page. Consist of standard layout content (see layout.js) plus SEO plus specific content
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="Solitudevej 2 - 2200 København N">
        <BannerButton>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
